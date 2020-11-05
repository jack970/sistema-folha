import React, { useEffect, useState } from 'react'
import GridView from '../../components/GridView'
import Main from '../../components/template/Main'
import api from '../../services/api'
import * as S from './style'
import EntryData from '../../components/templateFolha/EntryData'
import LogoutBtn from '../../components/templateFolha/btnLogout'
import InfosPainel from '../../components/templateFolha/InfosPainel'
import BtnSearch from '../../components/templateFolha/btnSearch'
import MenuOptions from '../../components/templateFolha/MenuOptions'

const headerProps = {
    icon: 'fa fa-product-hunt',
    title: 'Meu IPASC',
    subtitle: 'Veja as sua seguintes informações neste portal.'
}

const initialState = {
    tipo_folha: 'Normal',
    final: new Date(),
    inicio: new Date(),
    ano: new Date()
}

const Painel = () => {
    const [inputs, setInputs] = useState(initialState);
    const [ info, setInfo ] = useState([])
    const [dados, setDados] = useState([])

    useEffect(() => {
        const responsePainel = async() => {
            const response = await api.InfoPainel()
            setInfo(response)
        } 
        responsePainel()
    }, [])

    const handleSendForm = async e => {
        e.preventDefault()
        const response = await api.PegaContraCheque(inputs)
        
        if(response === "Nada foi Encontrado!"){
            setDados({ error: response})
        }
        else{
            setDados(response)
        }
    }
    return(
        <Main {...headerProps} >
            <S.Container className="container">
                <form onSubmit={handleSendForm}>
                    <div className="panel-body">
                        <InfosPainel info={info} />
                        <div className="row mt-5">
                            <MenuOptions />
                            <div className="tab-content p-4" style={{ width: '100%'}}>
                                <EntryData inputs={inputs} setInputs={setInputs} /> {/* Entrada de Dados */}
                                <div className="row mt-4">
                                    <BtnSearch />
                                </div>
                                <div className="row mt-4 overflow-auto">
                                        { dados.error ?  
                                                <p style={{ textAlign: 'center', 
                                                            width: "100%", 
                                                            fontSize: "1.2rem"}}>            
                                                    <b>{dados.error}</b> 
                                                </p> 
                                            : 
                                        <GridView infos={dados}/> }
                                </div>
                            </div>
                        </div>
                        <LogoutBtn />
                    </div>
                </form>
            </S.Container>
        </Main>
    )
}

export default Painel