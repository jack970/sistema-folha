import React from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import pt from 'date-fns/locale/pt-BR'
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
registerLocale("pt-BR", pt)

export const Row = ({children}) => <div className="row"> {children} </div>

export const SingleComponent = ({startIcon, helperText, error=false, label, name, value, handleInputChange, required=true, readOnly, otherThings}) => {
    return(
    <Box m={2}>
        <TextField fullWidth
            variant="outlined"
            required={required}
            label={label} 
            name={name}
            error={error}
            helperText={helperText}
            value={value}
            onChange={handleInputChange} 
            InputProps={{
            startAdornment: startIcon
            }}
            {...otherThings}
            readOnly={readOnly}/>  
    </Box>
    )
}

export const SingleRowComponent = ({name, startIcon, value, handleInputChange, label, md, placeholder}) =>
    <Row>
        <SingleComponent name={name} startIcon={startIcon} value={value} placeholder={placeholder} handleInputChange={handleInputChange} label={label} md={md}/>
    </Row>

export const DateCalendar = ({name, label, value, setInputs}) =>
<div className="col-md-3 mb-4">
    <div className="styleCalendar">
        <label htmlFor="Mes_Final"><b>{label}</b></label>
        <DatePicker 
            selected={ value }
            onChange={ e => setInputs(inputs => ({...inputs, [name]: e})) }
            locale="pt-BR"
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            className="form-control"
            />
    </div>
</div>

export const DualRowComponent = ({
    children, 
    startIcon1, 
    startIcon2, 
    name1, 
    name2, 
    value1, 
    value2, 
    handleInputChange, 
    firstlabel, 
    secondlabel, 
    md1="4", 
    md2="3", 
    readOnly1, 
    readOnly2, 
    placeholder1, 
    placeholder2}) =>
    <Row>
        <SingleComponent 
            name={name1}
            startIcon={startIcon1} 
            value={value1} 
            placeholder={placeholder1} 
            handleInputChange={handleInputChange} 
            label={firstlabel} 
            md={md1} 
            readOnly={readOnly1}/>
        <SingleComponent 
            name={name2} 
            startIcon={startIcon2} 
            value={value2} 
            placeholder={placeholder2} 
            handleInputChange={handleInputChange} 
            label={secondlabel} 
            md={md2} 
            readOnly={readOnly2}/>
        {children}
    </Row>

export const Button = ({label, style={}, handleButtonClick}) => 
    <div>
        <button style={style} onClick={handleButtonClick} type="button" className="btn btn-primary form-control">{label}</button>
    </div>

export const OnlySelectComponent = ({iterateList, required=true, label, name, handleInputChange, value}) => {
    return(
    <Box m={2}>
        <FormControl required variant="outlined">
                <InputLabel>{label}</InputLabel>
                <Select
                    required={required}
                    style={{ width: "10rem"}} 
                    label={label} 
                    value={value} 
                    name={name} 
                    onChange={handleInputChange}
                    >
                    <MenuItem value=""></MenuItem>
                    {iterateList.map((value, key) => 
                        <MenuItem value={value} key={key}>{value}</MenuItem>
                    )}
                </Select>
            
        </FormControl>
    </Box>)}
    
export const LegendField = ({children, title, titleSize=""}) => 
    <fieldset className="border p-3 mt-4 mb-5">
        <legend  className={`w-auto ${titleSize}`}>{title}</legend>
        {children}
    </fieldset>

export const Label = ({children, label}) => <label><b>{label}</b>{children}</label>

export const CheckBox = ({name, iterateList, handleInputChange, value, label}) =>
    <Box m={2}>
        <FormControl component="fieldset">
            <RadioGroup aria-label={label} name={name} value={value} onChange={handleInputChange}>
                <FormLabel component="legend">{label}</FormLabel>
                {iterateList.map((item, id) => 
                    <FormControlLabel key={id} value={item.value} control={<Radio />} label={item.label} />)}
            </RadioGroup>
        </FormControl>                        
    </Box>