
import { useState } from 'react'
import useWeather from "../hooks/useWeather"

function Formulary(){

    // const [alert, setAlert] = useState('')
    const {request, dataRequest, requestWeather, setResult, alert, setAlert} = useWeather()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(request).includes('')){
            setAlert('All field are required')
            setResult({})
            return
        }
        setAlert('')
        requestWeather(request)
        
    }

    return (
        <div className="form box">
            { alert && <p className='error'>{alert}</p> }
            <form action=""
                onSubmit={handleSubmit}
            >
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country"
                        onChange={dataRequest}
                    />
                </div>
                <div className="field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city"
                        onChange={dataRequest}
                    />
                </div>
                {/* <div className="field">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country"
                        onChange={dataRequest}
                    >
                        <option value="">Select Country</option>
                        <option value="US">United State</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">Spain</option>
                        <option value="PE">Peru</option>
                    </select>
                </div> */}
                <input type="submit" value='Request Weather' />
            </form>
        </div>
    )
}

export default Formulary