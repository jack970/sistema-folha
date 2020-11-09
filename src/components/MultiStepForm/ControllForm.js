import { useState } from "react";
import { initialState } from "../templateCadastro/InitialState";

const ControllForm = () => {
    const [inputs , setInputs] = useState(initialState)
    const [activeStep, setActiveStep] = useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return activeStep
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        return activeStep
    };

    const clear = e => {
        e.preventDefault()
        setInputs(initialState)
        setActiveStep(0)
    }

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setInputs(inputs => ({...inputs, [name]: value})); // Altera value do name em inputs ao digitar
    }   

    return{
        handleInputChange,
        handleBack,
        handleNext,
        setInputs,
        clear,
        inputs,
        activeStep
    }
}

export default ControllForm