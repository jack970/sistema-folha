import {useState} from 'react'

const UseSignUpForm =(callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit =(event) => {
        if(event) {
            event.preventDefault()
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }

    return {
        inputs,
        handleInputChange,
        handleSubmit
    }
}

export default UseSignUpForm