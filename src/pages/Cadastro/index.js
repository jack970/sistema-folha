import React, { useEffect, useState } from 'react';
import  MultiStep  from '../../components/MultiStepForm';
import Main from '../../components/template/Main'
import {Certidao, CTPS, Filiacao, Footer, OutrosDados, RG, TituloEleitoral} from '../../components/templateCadastro/Cabecalho';
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
    const [activeStep, setActiveStep] = useState(0);
    const { listUf, loadCity, listCity } = GetCityState()
    const [inputs , setInputs] = useState(initalState)

    const uf = inputs.estado_id

    useEffect(() => {
        if (uf) {
            loadCity(uf);
        }

    }, [uf]);

    const handleInputChange = (e) => {
        const {value, name} = e.target
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    const handleClickOnSubmit = () => {
        alert(inputs)
    }

    console.log(inputs)
  return (
    <Main {...headerProps}>
        <div className="container">
            <form onSubmit={handleClickOnSubmit} autoComplete="off">
                <MultiStep
                    setInputs={setInputs}
                    inputsTipo={inputs.tipo}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                >
                    {{ 0: <DadosPessoais handleInputChange={handleInputChange}
                                        selectvalue={inputs.tipo}
                                        nacionalidade={inputs.nacionalidade}
                                        setInputs={setInputs}
                                        valueNascimento={inputs.data_nascimento}
                                        ListaEstados={listUf}
                                        valueRaca={inputs.raca}
                                        valueSexo={inputs.sexo}
                                        ListaCidade={listCity}
                                        valueEstadoCivil={inputs.estado_civil}
                                        valueEscolaridade={inputs.escolaridade}
                                        value2={inputs.nome} />,
                    1: <TituloEleitoral 
                                handleInputChange={handleInputChange}
                                titulonumero={inputs.titulo_numero}
                                titulozona={inputs.titulo_zona}
                                titulosessao={inputs.titulo_sessao}
                        />,
                    2: <Certidao 
                                handleInputChange={handleInputChange}
                                termocertidao={inputs.termo_certidao}
                                matriculacertidao={inputs.matricula_certidao}
                                livrocertidao={inputs.livro_certidao}
                                folhacertidao={inputs.folha_certidao}
                                valueTipoCertidao={inputs.tipo_certidao} />,
                    3: <CTPS 
                            handleInputChange={handleInputChange} 
                            numeropis={inputs.numero_pis}
                            numeroctps={inputs.numero_ctps}
                            ufctps={inputs.uf_ctps}
                            seriectps={inputs.serie_ctps}
                            localctps={inputs.local_ctps}
                            emissaoctps={inputs.emissao_ctps} />,

                    4: <RG rgnumero={inputs.rg_numero} 
                            rguf={inputs.rg_uf}
                            rgorgao={inputs.rg_orgao}
                            valueRgExpedicao={inputs.rg_expedicao}
                            setInputs={setInputs}
                            handleInputChange={handleInputChange}/>,
                    5: <Filiacao nome_pai={inputs.nome_pai}
                                nome_mae={inputs.nome_mae}
                                cpf_pai={inputs.cpf_pai}
                                cpf_mae={inputs.cpf_mae}
                                handleInputChange={handleInputChange}
                    
                    />,
                    6: <OutrosDados handleInputChange={handleInputChange} 
                                    sus={inputs.sus}
                                    reservista={inputs.reservista}
                                    nis={inputs.nis}
                                    cnh={inputs.cnh}
                                    valueTipoSanguineo={inputs.tipo_sanguineo}
                    
                    />,
                    7: inputs.tipo === "Pessoa Jurídica" ?                         
                    <TableJuridica 
                        razaoSocial={inputs.razao_social}
                        cnpj={inputs.cnpj}
                        telefone1={inputs.telefone1}
                        telefone2={inputs.telefone2}
                        celular1={inputs.celular1}
                        celular2={inputs.celular2}
                        email1={inputs.email1}
                        email2={inputs.email2}
                        handleInputChange={handleInputChange}
                    /> : <TableFisica 
                            CPF={inputs.cpf}
                            telefone1={inputs.telefone1}
                            checkvalue={inputs.cargo}
                            telefone2={inputs.telefone2}
                            celular1={inputs.celular1}
                            celular2={inputs.celular2}
                            email1={inputs.email1}
                            email2={inputs.email2}
                            handleInputChange={handleInputChange} />
                    || "Passo Desconhecido"
                    }[activeStep]} 
                    <div className="panel-body">
                        <Footer handleInputChange={handleInputChange} selectValue={inputs.situacao}/>
                    </div>
                </MultiStep>
            </form>
        </div>
    </Main>
  )
}
export default Cadastro