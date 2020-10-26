import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const OnlyYear = ({label, calendar, name, setInput}) => {

    return(
        <div className="col-md-3 mt-4">
            <div className="styleCalendar">
                <label htmlFor="Mes_Final"><b>{label}</b></label>
                <DatePicker selected={calendar}
                    onChange={e => setInput(inputs => ({...inputs, [name]: e}))} 
                    dateFormat="yyyy"
                    className="form-control"
                    showYearPicker
                    />
            </div>
        </div>  
    )}

export default OnlyYear