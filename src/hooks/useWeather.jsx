
import { useContext } from 'react'
import WeatherContext from '../context/WetherProvider'

const useWeather = () => {
    return useContext(WeatherContext)
}

export default useWeather