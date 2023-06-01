import { useState } from 'react'
import AppWeather from './components/AppWeather'
import { WeatherProvider } from './context/WetherProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherProvider>
      <header>
        <h1>Get Weather</h1>
      </header>
      <AppWeather />
    </WeatherProvider>
  )
}

export default App
