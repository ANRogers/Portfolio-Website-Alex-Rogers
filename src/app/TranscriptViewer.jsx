import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './TranscriptViewer.css';

//const API_URL = import.meta.env.VITE_TRANSCRIPT_API_URL;
const API_URL = import.meta.env.DEV ? 'http://localhost:3000' : import.meta.env.VITE_TRANSCRIPT_API_URL;

function TranscriptViewer() {
    const [guilds, setGuilds] = useState([]);
    const [selectedGuildId, setSelectedGuildId] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('Connecting...');
    const [searchFilter, setSearchFilter] = useState('');

    const logRef = useRef(null);
    const selectedGuildRef = useRef('');
    // True while the user is at (or near) the bottom of the log
    const stickToBottomRef = useRef(true);

    // Keep track of the currently selected server
    useEffect(() => {
        selectedGuildRef.current = selectedGuildId;
    }, [selectedGuildId, selectedUserId]);

    // Load available Discord servers
    useEffect(() => {
        async function loadServers() {
            try {
                const response = await fetch(`${API_URL}/api/guilds`);

                if (!response.ok) {
                    throw new Error('Failed to load servers');
                }

                const data = await response.json();
                setGuilds(data);
            } catch (error) {
                console.error('Could not load servers:', error);
            }
        }

        loadServers();
    }, []);

    // Load transcript history when a server is selected
    useEffect(() => {
        if (!selectedGuildId) {
            setEntries([]);
            return;
        }

        let cancelled = false;

        async function loadTranscript() {
            stickToBottomRef.current = true; // start at the bottom for a new server
            setLoading(true);
            setEntries([]);

            try {
                const response = await fetch(
                    `${API_URL}/api/transcript/${selectedGuildId}`
                );

                if (!response.ok) {
                    throw new Error('Failed to load transcript');
                }

                const data = await response.json();

                if (!cancelled) {
                    setEntries(data);
                }
            } catch (error) {
                console.error('Could not load transcript:', error);

                if (!cancelled) {
                    setEntries([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadTranscript();

        return () => {
            cancelled = true;
        };
    }, [selectedGuildId]);

    const users = Array.from(
        new Map(
            entries.map(entry => [entry.userId, { id: entry.userId, name: entry.speaker }])
        ).values()
    );

    const userFilteredEntries = selectedUserId
        ? entries.filter(entry => entry.userId == selectedUserId)
        : entries;

    const filteredEntries = searchFilter
        ? userFilteredEntries.filter(entry =>
            entry.text.toLowerCase().includes(searchFilter.toLowerCase())
        )
        : userFilteredEntries;

    // Connect to the Express Socket.IO server
    useEffect(() => {
        const socket = io(API_URL);

        socket.on('connect', () => {
            setStatus('Live');
        });

        socket.on('disconnect', () => {
            setStatus('Disconnected');
        });

        socket.on('connect_error', (error) => {
            console.error('Socket connection error:', error);
            setStatus('Connection error');
        });

        // Listen for new transcript entries
        socket.on('newEntry', ({ guildId, entry }) => {
            if (guildId !== selectedGuildRef.current) return;

            setEntries(current => [...current, entry]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    // Track whether the user is near the bottom of the log
    function handleScroll() {
        const log = logRef.current;
        if (!log) return;

        const distanceFromBottom = log.scrollHeight - log.scrollTop - log.clientHeight;
        stickToBottomRef.current = distanceFromBottom < 80; // within 80px counts as "at the bottom"
    }

    // Only auto-scroll if the user hasn't scrolled up to read earlier lines
    useEffect(() => {
        const log = logRef.current;

        if (log && stickToBottomRef.current) {
            log.scrollTop = log.scrollHeight;
        }
    }, [entries, filteredEntries.length]);

    function renderEntry(entry, index) {
        const time = new Date(entry.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        return (
            <div className="line" key={`${entry.timestamp}-${index}`}>
                <span className="time">{time}</span>

                <span
                    className="speaker"
                    style={{ color: entry.colour }}
                >
                    {entry.speaker}
                </span>

                <span className="text">{entry.text}</span>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="top">
                <h1>Session Transcript</h1>

                <div className="status">
                    <span
                        className={`status-dot ${
                            status === 'Live' ? 'live' : ''
                        }`}
                    />

                    <span>{status}</span>
                </div>
            </div>

            <select
                value={selectedGuildId}
                onChange={(event) => setSelectedGuildId(event.target.value)}
            >
                <option value="">Select a server...</option>

                {guilds.map((guild) => (
                    <option key={guild.id} value={guild.id}>
                        {guild.name}
                    </option>
                ))}
            </select>

            <div className="filter-box">
                <div className="search-wrap">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search Transcript"
                        value={searchFilter}
                        onChange={(event) => setSearchFilter(event.target.value)}
                    />
                </div>

                <select
                    value={selectedUserId}
                    onChange={(event) => setSelectedUserId(event.target.value)}
                >
                    <option value="">All Users</option>

                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="log" ref={logRef} onScroll={handleScroll}>
                {!selectedGuildId ? (
                    <div className="empty-state">
                        Select a server to view its transcript.
                    </div>
                ) : loading ? (
                    <div className="empty-state">
                        Loading transcript...
                    </div>
                ) : entries.length === 0 ? (
                    <div className="empty-state">
                        Nothing transcribed yet. Start talking in voice chat.
                    </div>
                ) : (
                    filteredEntries.map(renderEntry)
                )}
            </div>
        </div>
    );
}

export default TranscriptViewer;