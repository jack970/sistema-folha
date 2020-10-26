import React from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import pt from 'date-fns/locale/pt-BR'

registerLocale("pt-BR", pt)

const DateCalendar = ({label, calendar, name, setInput}) => {

    return(
        <div className="col-md-3 mt-4">
            <div className="styleCalendar">
                <label htmlFor="Mes_Final"><b>{label}</b></label>
                <DatePicker selected={calendar} style={{ display: 'block'}}
                    onChange={e => setInput(inputs => ({...inputs, [name]: e}))} 
                    dateFormat="MMMM"
                    locale="pt-BR"
                    className="form-control"
                    showMonthYearPicker
                    />
            </div>
        </div>
    )}

export default DateCalendar