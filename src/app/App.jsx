import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Analytics } from "@vercel/analytics/react"

import TriangleBackground from './Background.jsx'
import SunBackground from './Sun.jsx'
import Content from './Content.jsx'
import MouseDVDBackground from './SecretMouseDVD.jsx'
import TranscriptViewer from './TranscriptViewer.jsx'

function App() {
    const [showDVD, setShowDVD] = useState(false);

    return (
        <BrowserRouter>
            <div className="app">
                <Analytics />
                <MouseDVDBackground showDVD={showDVD} />

                <div className='background'>
                    <TriangleBackground />
                    <SunBackground />
                </div>

                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Content setShowDVD={setShowDVD} />}
                        />

                        <Route
                            path="/transcripts"
                            element={<TranscriptViewer />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App