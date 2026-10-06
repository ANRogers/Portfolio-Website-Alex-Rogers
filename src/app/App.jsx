import { useState } from 'react'
import './App.css'

import TriangleBackground from './Background.jsx'
import SunBackground from './Sun.jsx'
import Content from './Content.jsx'
import MouseDVDBackground from './SecretMouseDVD.jsx'


function App() {
  const [showDVD, setShowDVD] = useState(false);
  return (
    <div className="app">
      <MouseDVDBackground showDVD={showDVD} />
      <div className='background'>
        <TriangleBackground />
        <SunBackground />
      </div>

      <div className="content">
        <Content setShowDVD={setShowDVD} />
      </div>
      
    </div>
  );
}

export default App
