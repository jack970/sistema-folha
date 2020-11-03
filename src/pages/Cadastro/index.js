import React, { useState } from 'react';
import  MultiStep  from '../../components/MultiStepForm';
import Main from '../../components/template/Main'
import { 
    Certidao, 
    CTPS, 
    Filiacao, 
    Footer, 
    OutrosDados, 
    RG, 
    TituloEleitoral
} from '../../components/templateCadastro/Cabecalho';
import GetCityState from '../../components/templateCadastro/services';
import TableFisica from '../../components/templateCadastro/TableFisica';
import TableJuridica from '../../components/templateCadastro/TableJuridica';
import { DadosPessoais } from "../../components/templateCadastro/Cabecalho";
import { initalState } from '../../components/templateCadastro/InitialState';

const headerProps = {
    icon: 'fa fa-product-hunt',
    title: 'Cadastro Único | IPASC - PROSAUDE',
    subtitle: 'Cadastro Único de Pessoas do IPASC e PROSAUDE'
}

const Cadastro = () => {
    const [activeStep, setActiveStep] = useState(0); // Cria qtdade de passos
    const [inputs , setInputs] = useState(initalState) // Pega Formulário inicial

    const uf = inputs.estado_id // Pega o estado_id do form
    const { listUf, listCity } = GetCityState(uf) // Envia o estado_id para função e chama as listas de estados e cidades.

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setInputs(inputs => ({...inputs, [name]: value})); // Altera value do name em inputs ao digitar
    }

    const props = { inputs, setInputs, handleInputChange, listUf, listCity}
    const propsMultiStep = { inputs, setInputs, activeStep, setActiveStep }
    
  return (
    <Main {...headerProps}>
        <div className="container">
            <MultiStep {...propsMultiStep}>
                {{
                    // Declaração de switch case
                    0: <DadosPessoais {...props} />,
                    1: <TituloEleitoral {...props}/>,
                    2: <Certidao {...props} />,
                    3: <CTPS {...props} />,
                    4: <RG {...props}/>, 
                    5: <Filiacao {...props}/>,
                    6: <OutrosDados {...props}/>,
                    7: inputs.tipo === "Pessoa Jurídica" 
                        ?   <TableJuridica {...props}/> 
                        :   <TableFisica {...props} /> 
                        || "Passo Desconhecido"
                    }[activeStep]} 
                <div className="panel-body">
                    <Footer handleInputChange={handleInputChange} selectValue={inputs.situacao}/>
                </div>
            </MultiStep>
        </div>
    </Main>
  )
}
export default Cadastro