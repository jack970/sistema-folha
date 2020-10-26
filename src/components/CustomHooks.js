import {useState} from 'react'

const UseSignUpForm =(callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit =(event) => {
        if(event) {
            event.preventDefault()
        }
    }

    const handleInputChange = (event, mask) => {
        event.persist();
        const {value, name} = event.target

        setInputs(inputs => ({...inputs, [name]: mask ?  mask(value) : value}));
      }

    const clearInputs = (event) => {
        event.preventDefault();
        setInputs({});
      }

    return {
        inputs,
        clearInputs,
        setInputs,
        handleInputChange,
        handleSubmit
    }
}

export default UseSignUpForm