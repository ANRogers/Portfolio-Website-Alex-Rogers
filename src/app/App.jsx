import { useState } from 'react'
import './App.css'

import TriangleBackground from './Background.jsx'
import SunBackground from './Sun.jsx'
import Content from './Content.jsx'

function App() {
  
  return (
    <div className="app">
      <div className='background'>
        <TriangleBackground />
        <SunBackground />
      </div>

      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App
