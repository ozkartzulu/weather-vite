
import Formulary from "./Formulary"
import WeatherView from "./WeatherView"

function AppWeather(){

    return (
        <main className="main">
            <div className="container">
                <div className="main-content two-columns">
                    <Formulary />
                    <WeatherView />
                </div>               
            </div>
        </main>
    )
}

export default AppWeather