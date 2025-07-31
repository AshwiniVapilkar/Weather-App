import { useState } from 'react'
import './App.css'
import WeatherApp from './WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Background video */}
      <video className="bg-video" autoPlay muted loop>
        <source src="public/videoback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Weather App content */}
      <div className="content">
        <WeatherApp />
      </div>
    </>
  )
}

export default App

