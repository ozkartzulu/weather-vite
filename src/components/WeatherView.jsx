
import useWeather from "../hooks/useWeather"
import Loader from "./Loader"

const WeatherView = () => {

    const {result, loader} = useWeather()
    const kelvin = 273.15

    return (
        <>
            { loader ? (
                <div className="loading">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            ): (
                result?.name && <div className="box view">
                    <h3>{result.name} Weather </h3>
                    <p>{parseInt(result.current - kelvin)} <span>&#8451;</span></p>
                    <div>
                        <p>Min: {parseInt(result.min - kelvin)} <span>&#8451;</span></p> 
                        <p>Max: {parseInt(result.max - kelvin)} <span>&#8451;</span></p>
                    </div>
                </div>      
            )
            }
        </>
    )
}

export default WeatherView