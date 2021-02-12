import React, { useState } from 'react';
import UseSignUpForm from '../../components/CustomHooks'
import { maskCPF } from '../Painel/mask'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'
import * as S from './style'
import { login } from '../../services/auth';

const Login = withRouter(({ history }) => {
    const { inputs, setInputs, handleInputChange} = UseSignUpForm()
    const [ selectOption, setOption ] = useState(true)

    const handleSignIn = async e => {
        e.preventDefault();
        const { CPF, senha, matricula } = inputs
        
        if ((!CPF || !senha) && (!matricula || !senha)) {
          setInputs({ error: "Preencha os campos para continuar!" });
        } else {
          try {
            const response = await api.SignIn(inputs)
              if(response === "Senha ou Usuários Incorretos") {
                setInputs({error: response})
              }else {
                  login(response.accessToken, response.refreshToken)
                  history.push(`/painel`)
              }
          } catch (err) {
            setInputs({
              error:
                "Houve um problema com o login, provavelmente possa ser um erro interno. T.T"
            });
          }
        }
      };
    
  return (
    <S.Container>
        <S.Form onSubmit={handleSignIn}>
            <h1>Login</h1>
            {inputs.error && <p>{inputs.error}</p> }
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" 
                      name="exampleRadios" 
                      value="option1" 
                      onChange={() => setOption(false)} 
                      defaultChecked={!selectOption}/>
                    <label className="form-check-label">
                        Usar CPF
                    </label>
                </div>
                <S.Input type="text" name="CPF" 
                    onChange={(e) => handleInputChange(e, maskCPF)}
                    placeholder="999.999.999-99" 
                    value={inputs.CPF || ''}
                    disabled={selectOption ? "disabled" : ""}/>
                <div className="form-check">
                    <input className="form-check-input" 
                    type="radio" name="exampleRadios" 
                    value="option2" onChange={() => setOption(true)} 
                    defaultChecked={selectOption}/>
                    <label className="form-check-label" >
                        Usar Matrícula
                    </label>
                </div>
                <S.Input type="text" name="matricula" 
                        onChange={handleInputChange} 
                        value={inputs.matricula || ''}
                        disabled={selectOption ? "" : "disabled"}
                        />
                <label style={{marginTop: '1rem'}}>Senha</label>
                <S.Input type="password" name="senha" onChange={handleInputChange} value={inputs.senha || ''}/>
            </div>
            <button type="submit">Logar</button>
        </S.Form>
    </S.Container>
  )
})

export default Login;