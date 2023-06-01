
import { createContext, useState } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [request, setRequest] = useState({
        city: '',
        country: ''
    })

    const [result, setResult] = useState({})

    const [alert, setAlert] = useState('')

    const dataRequest = (e) => {
        setRequest({
            ...request,
            [e.target.name] : e.target.value
        })
    }

    const [loader, setLoader] = useState(false)

    const requestWeather = async weather => {
        setLoader(true)
        try {
            const {city, country} = weather
            const urlCode = `https://restcountries.com/v3.1/name/${country}`
            let countryCode = ''

            try {
                const {data} = await axios(urlCode)
                countryCode = data[0]
            } catch (error) {
                setAlert('The Country name no exist')
                setLoader(false)
                setResult({})
                return ''
            }
            
            const appId = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode.cca2}&limit=1&appid=${appId}`
            const {data} = await axios(url)
            const {lat, lon} = data[0]
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: weatherData} = await axios(urlWeather)
            const {name, main} = weatherData
            setResult({
                name,
                min: main.temp_min,
                max: main.temp_max,
                current: main.temp
            })
            setLoader(false)
        } catch (error) {
            setAlert('The Country or the City entered there is not exist')
            setLoader(false)
            setResult({})
            return ''
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                request,
                dataRequest,
                requestWeather,
                result,
                setResult,
                loader,
                alert,
                setAlert
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext