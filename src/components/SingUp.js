import React from 'react';
import UseSignUpForm from './CustomHooks'

const Signup = () => {
    const { inputs, handleInputChange, handleSubmit} = UseSignUpForm()


    const signup = () => {
        alert(`
            Usuario criado: \n
            Nome: ${inputs.firstName} ${inputs.lastName}
        `)
        console.log(inputs)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" required onChange={handleInputChange}  value={inputs.firstName || ''} />
        <label>Last Name</label>
        <input type="text" name="lastName" required onChange={handleInputChange} value={inputs.lastName || ''}/>
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" required onChange={handleInputChange} value={inputs.email || ''} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''}/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2 || ''}/>
      </div>
      <button type="submit" onClick={() => signup()}>Sign Up</button>
    </form>
  )
}
export default Signup;