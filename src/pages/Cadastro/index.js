import React from 'react';
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
import ControllForm from '../../components/MultiStepForm/ControllForm';

const headerProps = {
    icon: 'fa fa-product-hunt',
    title: 'Cadastro Único | IPASC - PROSAUDE',
    subtitle: 'Cadastro Único de Pessoas do IPASC e PROSAUDE'
}

const Cadastro = () => {
    const { inputs, setInputs, clear, activeStep, handleBack, handleNext, handleInputChange} = ControllForm()
    const propsMultiStep = {inputs, clear, activeStep, handleBack, handleNext}

    const uf = inputs.estado_id // Pega o estado_id do form
    const { listUf, listCity } = GetCityState(uf) // Envia o estado_id para função e chama as listas de estados e cidades.
    const props = { inputs, setInputs, handleNext, handleBack, handleInputChange, listUf, listCity}
    
  return (
    <Main {...headerProps}>
        <div className="container">
            <MultiStep {...propsMultiStep}>
                {{ // Declaração de switch case
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