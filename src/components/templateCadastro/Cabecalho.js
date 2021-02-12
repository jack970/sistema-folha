import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'
import { AccountCircle, ContactMail } from '@material-ui/icons/';
import { CheckBox, DualRowComponent, LegendField, OnlySelectComponent, Row, SingleComponent, ButtonNext, ButtonBack} from './RowComponent'
import KeyboardDatePickerComponent from './DatePickerField';

export const DadosPessoais = ({ inputs, setInputs, handleNext, handleInputChange, listUf, listCity }) => {
    const { nome, 
        tipo, 
        data_nascimento, 
        nacionalidade, 
        estado_civil, 
        raca, 
        sexo, 
        escolaridade } = inputs
    const Tipo = ["Pessoa Física", "Pessoa Jurídica"]
    const Sexo = ["Masculino", "Feminino"]
    const EstadoCivil = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "Separado(a)"]
    const Escolaridade = ["Não sabe ler/escrever", "Alfabetizado", "1ª Grau completo", "2ª Grau completo", "1ª Grau Incompleto", "2ª Grau Incompleto", "Superior Incompleto", "Superior Completo", "Especialização/Residência", "Mestrado", "Doutorado"]
    const CorRaca = ["Branco(a)", "Pardo(a)", "Preto(a)", "Amarelo(a)", "Indígena"]

    return(
        <form onSubmit={handleNext} autoComplete="off">
            <LegendField title="Dados Pessoais" titleSize="h3">
                <Row>
                    <SingleComponent
                        label="Código"
                        required={false}
                        startIcon={ <ContactMail /> }
                        readOnly={true} 
                        />
                    <SingleComponent 
                        label="Nome"
                        startIcon={ <AccountCircle /> }
                        error={!inputs.nome && true}
                        helperText={!inputs.nome && "Preencha o campo!"}
                        name="nome"
                        value={nome}
                        handleInputChange={handleInputChange}
                        />
                    <OnlySelectComponent 
                        handleInputChange={handleInputChange} 
                        name="tipo"
                        value={tipo}
                        iterateList={Tipo} md="3" label="Tipo" 
                    />
                    <KeyboardDatePickerComponent 
                        setInputs={setInputs} 
                        valueDate={data_nascimento}
                        label="Data de Nascimento"
                        name="data_nascimento" />
                    <Autocomplete
                        style={{ width: 300, margin: '1rem'}}
                        onChange={(e,v) => 
                            setInputs(inputs => ( 
                                v ? 
                                {...inputs, "estado_nome": v.nome, "estado_id": v.id} 
                                : {...inputs})
                        )}
                        options={listUf}
                        getOptionLabel={(option) => option.nome}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                label="Selecione o Estado" 
                                variant="outlined" 
                            />}
                    />
                    <Autocomplete
                        style={{ width: 300, margin: '1rem'}}
                        onChange={(e,v) => 
                            setInputs(inputs => ( 
                                v ? 
                                {...inputs,"cidade": v.nome} 
                                : {...inputs})
                        )}
                        options={listCity}
                        getOptionLabel={(option) => option.nome}
                        getOptionSelected={(option, value) => option.nome === value.nome}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                label="Selecione a Cidade" 
                                variant="outlined" />}
                    />
                    <SingleComponent 
                        label="Nacionalidade" 
                        value={nacionalidade} 
                        handleInputChange={handleInputChange}
                        name="nacionalidade" 
                        md="3"/>
                    <OnlySelectComponent 
                        handleInputChange={handleInputChange} 
                        name="sexo" 
                        value={sexo} 
                        iterateList={Sexo} 
                        md="3" 
                        label="Sexo" />
                    <OnlySelectComponent   
                        handleInputChange={handleInputChange} 
                        name="estado_civil" 
                        value={estado_civil} 
                        iterateList={EstadoCivil} 
                        md="3" 
                        label="Estado Civil" />
                    <OnlySelectComponent 
                        handleInputChange={handleInputChange} 
                        name="escolaridade" 
                        value={escolaridade} 
                        iterateList={Escolaridade} 
                        md="3" 
                        label="Escolaridade" />
                    <OnlySelectComponent 
                        handleInputChange={handleInputChange} 
                        name="raca" 
                        value={raca} 
                        iterateList={CorRaca} 
                        md="3" 
                        label="Raça / Cor" />
                </Row>
                <ButtonNext />
            </LegendField>
        </form>
    )
}

export const TituloEleitoral = ({handleBack, handleNext, inputs, handleInputChange}) => {
    const { titulo_numero, titulo_sessao, titulo_zona} = inputs
    return(
        <form onSubmit={handleNext}>
            <LegendField title="Título Eleitoral" titleSize="h3">
                <Row>
                    <SingleComponent label="Título Número" name="titulo_numero" value={titulo_numero} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
                    <SingleComponent label="Título Zona" name="titulo_zona"  value={titulo_zona} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
                    <SingleComponent label="Título sessão" name="titulo_sessao"  value={titulo_sessao} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
                </Row>
            </LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />
        </form>
    )
}

export const Certidao = ({handleNext, handleBack, inputs, handleInputChange }) => {
    const { tipo_certidao, termo_certidao, folha_certidao, livro_certidao, matricula_certidao} = inputs
    const TipoCertidao = ["Certidão de Nascimento", "Certidão de Casamento", "Certidão de Óbito", "Certidão de Registro de Imóveis"]
    return(
        <form onSubmit={handleNext}>  
            <LegendField title="Certidão" titleSize="h3">
                <Row>
                    <OnlySelectComponent handleInputChange={handleInputChange} name="tipo_certidao" value={tipo_certidao} iterateList={TipoCertidao} md="5" label="Tipo de Certidão" /> {/*Certidão */}
                    <SingleComponent name="termo_certidao" handleInputChange={handleInputChange} value={termo_certidao} label="Termo de Certidão" md="4"/> {/* Certidão */}
                    <SingleComponent name="folha_certidao" handleInputChange={handleInputChange} value={folha_certidao} label="Folha de Certidão" md="4"/> {/* Certidão */}
                    <SingleComponent name="livro_certidao" handleInputChange={handleInputChange} value={livro_certidao} label="Livro de Certidão" md="4"/>{/* Certidão */}
                    <SingleComponent name="matricula_certidao" handleInputChange={handleInputChange}value={matricula_certidao} label="Matrícula da Certidão" md="4"/> {/* Certidão */}
                </Row>
            </LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />
        </form> 
    )
}

export const CTPS = ({handleBack, handleNext, inputs, handleInputChange}) => {
    const { numero_pis, numero_ctps, uf_ctps, serie_ctps, emissao_ctps, local_ctps} = inputs
    return(
        <form onSubmit={handleNext}>
            <LegendField title="CTPS" titleSize="h3">
                <Row>
                    <SingleComponent name="numero_pis" 
                                    handleInputChange={handleInputChange}
                                    value={numero_pis}
                                    label="Número PIS / PASEP" md="4"/> {/* CTPS */}
                    <SingleComponent name="numero_ctps"
                                    value={numero_ctps}
                                    handleInputChange={handleInputChange}
                                    label="Número CTPS" md="4"/> {/* CTPS */}
                    <SingleComponent name="uf_ctps"
                                    value={uf_ctps}
                                    handleInputChange={handleInputChange}
                                    label="UF CTPS" md="4"/> {/* CTPS */}
                    <SingleComponent name="serie_ctps" 
                                    value={serie_ctps}
                                    handleInputChange={handleInputChange}
                                    label="Série da CTPS" md="4"/> {/* CTPS */}
                    <SingleComponent name="emissao_ctps" 
                                    value={emissao_ctps}
                                    handleInputChange={handleInputChange}
                                    label="Data de Emissão da CTPS" md="4"/> {/* CTPS */}
                    <SingleComponent name="local_ctps"
                                    value={local_ctps}
                                    handleInputChange={handleInputChange}
                                    label="Local de Expedição da CTPS" md="4"/> {/* CTPS */}
                </Row>
            </LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />
        </form>
    )
}

export const RG = ({handleNext, handleBack, inputs, handleInputChange, setInputs}) => {
    const { rg_numero, rg_orgao, rg_uf, rg_expedicao} = inputs
    return(
        <form onSubmit={handleNext}>
            <LegendField title="RG" titleSize="h3">
                <Row>
                    <SingleComponent name="rg_numero"
                                    value={rg_numero}
                                    handleInputChange={handleInputChange}
                                    label="Número RG" md="4"/>
                    <SingleComponent label="RG Órgão"
                                        name="rg_orgao"
                                        value={rg_orgao}
                                        handleInputChange={handleInputChange}
                                        md="4"/> 
                    <SingleComponent label="RG UF"
                                        name="rg_uf"
                                        value={rg_uf}
                                        handleInputChange={handleInputChange}
                                        md="4"/>
                     <KeyboardDatePickerComponent 
                        setInputs={setInputs} 
                        valueDate={rg_expedicao}
                        label="Data de Expedição"
                        name="rg_expedicao" />
                </Row>
            </LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />
        </form>
    )
}

export const Filiacao = ({handleNext, handleBack, inputs, handleInputChange}) => {
    const { nome_pai, nome_mae, cpf_pai, cpf_mae} = inputs
    return(
        <form onSubmit={handleNext}>
            <LegendField title="Filiação" titleSize="h3" >
                <Row>
                    <SingleComponent name="nome_pai" value={nome_pai} label="Nome do Pai" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                    <SingleComponent name="nome_mae"value={nome_mae} label="Nome da Mãe" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                    <SingleComponent name="cpf_pai" value={cpf_pai} label="CPF do Pai" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                    <SingleComponent name="cpf_mae" value={cpf_mae} label="CPF da Mãe" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                </Row>
            </LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />  
        </form>
    )
}

export const OutrosDados = ({handleNext, handleBack, inputs, handleInputChange}) => {
    const { reservista, cnh, sus, tipo_sanguineo, nis} = inputs
    const TipoSanguineo = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    const Opcoes = [
        {
            value: "sim",
            label: "Sim"
        },
        {
            value: "nao",
            label: "Não"
        }
    ]
    return(
        <form onSubmit={handleNext}>
            <LegendField title="Outros Dados" titleSize="h3">
                <Row>
                    <SingleComponent label="Reservista" name="reservista" value={reservista} handleInputChange={handleInputChange} md="4"/> 
                    <SingleComponent label="CNH" name="cnh" value={cnh} handleInputChange={handleInputChange} md="4"/> 
                    <SingleComponent label="Número de Integração Social" value={nis} name="nis" handleInputChange={handleInputChange} md="4"/>
                    <SingleComponent label="SUS" value={sus} name="sus" handleInputChange={handleInputChange} md="4"/>
                    <CheckBox handleInputChange={handleInputChange} iterateList={Opcoes} label="É doador de Órgãos?" name="doador_orgaos"/>
                    <OnlySelectComponent handleInputChange={handleInputChange} 
                        name="tipo_sanguineo" value={tipo_sanguineo} iterateList={TipoSanguineo} md="2" label="Tipo Sanguíneo" />
                </Row>
            </ LegendField>
            <ButtonBack handleBack={handleBack} />
            <ButtonNext />  
            </form> 
    )
}

export const Footer = ({handleNext, handleInputChange, selectValue }) => {
    const Status = ["Ativo", "Inativo"]
    return(
    <LegendField title="Cadastro">
        <DualRowComponent 
        readOnly1={true}
        readOnly2={true}
        firstlabel="Data de Cadastro" 
        secondlabel="Última Alteração">
            <OnlySelectComponent 
            handleInputChange={handleInputChange} 
            name="situacao" 
            value={selectValue}
            iterateList={Status} 
            md="3" label="Situação" />
        </DualRowComponent>
    </LegendField>
    )
}