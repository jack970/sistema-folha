import React from 'react'
import DateCalendar from '../DateCalendar'
import OnlyYear from '../DateCalendar/onlyYear'

const EntryData = ({setInputs, inputs}) => {
    
    const infoSelect  = ["Normal", "Complementar"]

    const handleInputChange = (event) => {
        event.persist();
        const {value, name} = event.target
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    return(
        <div className="row">
            <div className="col-md-6 mt-4">
                <label htmlFor="Tipo de Folha"><b>Tipo de folha</b></label>
                <select onChange={(e) => handleInputChange(e)} className="form-control" name="tipo_folha" required>
                    {infoSelect.map(info => (
                        <option value={info} key={info} >{info}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-6 mt-4" />
            <OnlyYear label="Ano"
                setInput={setInputs}
                name="ano"
                calendar={inputs.ano} 
                />
            <DateCalendar label="Mês Inicial"
                setInput={setInputs}
                name="inicio"
                calendar={inputs.inicio}
                />
            <DateCalendar label="Mês Final"
                setInput={setInputs}
                name="final"
                calendar={inputs.final} 
                />
        </div>
    )
}

export default EntryData