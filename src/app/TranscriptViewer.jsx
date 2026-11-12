
import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './TranscriptViewer.css';

const API_URL = import.meta.env.VITE_TRANSCRIPT_API_URL;

function TranscriptViewer() {
    const [guilds, setGuilds] = useState([]);
    const [selectedGuildId, setSelectedGuildId] = useState('');
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('Connecting...');

    const logRef = useRef(null);
    const selectedGuildRef = useRef('');

    // Keep track of the currently selected server
    useEffect(() => {
        selectedGuildRef.current = selectedGuildId;
    }, [selectedGuildId]);

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

    // Scroll to the latest transcript entry
    useEffect(() => {
        const log = logRef.current;

        if (log) {
            log.scrollTop = log.scrollHeight;
        }
    }, [entries]);

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

            <div className="log" ref={logRef}>
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
                    entries.map(renderEntry)
                )}
            </div>
        </div>
    );
}

export default TranscriptViewer;
