
import { useState, useEffect, useRef } from 'react';
import './TranscriptViewer.css';

function TranscriptViewer() {
    const [guilds, setGuilds] = useState([]);
    const [selectedGuildId, setSelectedGuildId] = useState('');
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('Connecting...');

    const logRef = useRef(null);

    // Load available servers
    useEffect(() => {
        async function loadServers() {
            try {
                const response = await fetch('/api/guilds');

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

    // Load transcript when selected server changes
    useEffect(() => {
        if (!selectedGuildId) {
            setEntries([]);
            return;
        }

        async function loadTranscript() {
            setLoading(true);

            try {
                const response = await fetch(
                    `/api/transcript/${selectedGuildId}`
                );

                if (!response.ok) {
                    throw new Error('Failed to load transcript');
                }

                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error('Could not load transcript:', error);
                setEntries([]);
            } finally {
                setLoading(false);
            }
        }

        loadTranscript();
    }, [selectedGuildId]);

    // Automatically scroll when new entries are added
    useEffect(() => {
        const log = logRef.current;

        if (!log) return;

        const nearBottom =
            log.scrollHeight - log.scrollTop - log.clientHeight < 40;

        if (nearBottom) {
            log.scrollTop = log.scrollHeight;
        }
    }, [entries]);

    // Display transcript entries
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
