import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React from 'react'
import { AccountCircle, ContactMail } from '@material-ui/icons/';
import { DateCalendar, CheckBox, DualRowComponent, LegendField, OnlySelectComponent, Row, SingleComponent} from './RowComponent'

export const DadosPessoais = ({value2, nacionalidade, ListaCidade, valueCidade, setInputs, ListaEstados, valueEstado, selectvalue, valueRaca, valueEscolaridade , valueEstadoCivil, valueNascimento, valueSexo, handleInputChange}) => {
    const Tipo = ["Pessoa Física", "Pessoa Jurídica"]
    const Sexo = ["Masculino", "Feminino"]
    const EstadoCivil = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "Separado(a)"]
    const Escolaridade = ["Não sabe ler/escrever", "Alfabetizado", "1ª Grau completo", "2ª Grau completo", "1ª Grau Incompleto", "2ª Grau Incompleto", "Superior Incompleto", "Superior Completo", "Especialização/Residência", "Mestrado", "Doutorado"]
    const CorRaca = ["Branco(a)", "Pardo(a)", "Preto(a)", "Amarelo(a)", "Indígena"]

    return(
        <LegendField title="Dados Pessoais" titleSize="h3">
            <Row>
            <SingleComponent 
                label="Código"
                startIcon={ <ContactMail /> }
                readOnly={true} 
                />
             <SingleComponent 
                label="Nome"
                startIcon={ <AccountCircle /> }
                name="nome"
                value={value2}
                handleInputChange={handleInputChange}
                />
            
                <OnlySelectComponent 
                    handleInputChange={handleInputChange} 
                    name="tipo"
                    value={selectvalue}
                    iterateList={Tipo} md="3" label="Tipo" 
                />
                <Autocomplete
                    style={{ width: 300, margin: '1rem'}}
                    id="combo-box-demo"
                    onChange={(e,v) => 
                        setInputs(inputs => ( 
                            v ? 
                            {...inputs, "estado_nome": v.nome, "estado_id": v.id} 
                            : {...inputs})
                    )}
                    options={ListaEstados}
                    inputValue={valueEstado}
                    getOptionLabel={(option) => option.nome}
                    getOptionSelected={(option, value) => option.nome === value.nome}
                    renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label="Selecione o Estado" 
                            variant="outlined" 
                        />}
                />
                <Autocomplete
                    style={{ width: 300, margin: '1rem'}}
                    id="combo-box-demo"
                    onChange={(e,v) => 
                        setInputs(inputs => ( 
                            v ? 
                            {...inputs,"cidade": v.nome} 
                            : {...inputs})
                    )}
                    options={ListaCidade}
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
                <DateCalendar 
                    label="Data de Nascimento" 
                    name="data_nascimento" 
                    setInputs={setInputs} 
                    value={valueNascimento} />
                <OnlySelectComponent 
                    handleInputChange={handleInputChange} 
                    name="sexo" 
                    value={valueSexo} 
                    iterateList={Sexo} 
                    md="3" 
                    label="Sexo" />
                <OnlySelectComponent   
                    handleInputChange={handleInputChange} 
                    name="estado_civil" 
                    value={valueEstadoCivil} 
                    iterateList={EstadoCivil} 
                    md="3" 
                    label="Estado Civil" />
                <OnlySelectComponent 
                    handleInputChange={handleInputChange} 
                    name="escolaridade" 
                    value={valueEscolaridade} 
                    iterateList={Escolaridade} 
                    md="3" 
                    label="Escolaridade" />
                <OnlySelectComponent 
                    handleInputChange={handleInputChange} 
                    name="raca" 
                    value={valueRaca} 
                    iterateList={CorRaca} 
                    md="3" 
                    label="Raça / Cor" />
            </Row>
        </LegendField>
    )
}

export const TituloEleitoral = ({ titulonumero, titulozona, titulosessao, handleInputChange}) => {
    return(
        <LegendField title="Título Eleitoral" titleSize="h3">
            <Row>
                <SingleComponent label="Título Número" name="titulo_numero" value={titulonumero} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
                <SingleComponent label="Título Zona" name="titulo_zona"  value={titulozona} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
                <SingleComponent label="Título sessão" name="titulo_sessao"  value={titulosessao} handleInputChange={handleInputChange} md="4"/> {/* Título Eleitoral */}
            </Row>
        </LegendField>
    )
}

export const Certidao = ({handleInputChange, valueTipoCertidao, termocertidao, folhacertidao, livrocertidao, matriculacertidao }) => {
    const TipoCertidao = ["Certidão de Nascimento", "Certidão de Casamento", "Certidão de Óbito", "Certidão de Registro de Imóveis"]
    return(
        <LegendField title="Certidão" titleSize="h3">
            <Row>
                <OnlySelectComponent handleInputChange={handleInputChange} 
                    name="tipo_certidao" value={valueTipoCertidao} iterateList={TipoCertidao} md="5" label="Tipo de Certidão" /> {/*Certidão */}
                <SingleComponent name="termo_certidao" handleInputChange={handleInputChange} value={termocertidao} label="Termo de Certidão" md="4"/> {/* Certidão */}
                <SingleComponent name="folha_certidao" handleInputChange={handleInputChange} value={folhacertidao} label="Folha de Certidão" md="4"/> {/* Certidão */}
                <SingleComponent name="livro_certidao" handleInputChange={handleInputChange} value={livrocertidao} label="Livro de Certidão" md="4"/>{/* Certidão */}
                <SingleComponent name="matricula_certidao" handleInputChange={handleInputChange}value={matriculacertidao} label="Matrícula da Certidão" md="4"/> {/* Certidão */}
            </Row>
        </LegendField>
    )
}

export const CTPS = ({handleInputChange, numeropis, numeroctps, ufctps, seriectps, emissaoctps, localctps}) => {
    return(
        <LegendField title="CTPS" titleSize="h3">
            <Row>
                <SingleComponent name="numero_pis" 
                                handleInputChange={handleInputChange}
                                value={numeropis}
                                label="Número PIS / PASEP" md="4"/> {/* CTPS */}
                <SingleComponent name="numero_ctps"
                                value={numeroctps}
                                handleInputChange={handleInputChange}
                                label="Número CTPS" md="4"/> {/* CTPS */}
                <SingleComponent name="uf_ctps"
                                value={ufctps}
                                handleInputChange={handleInputChange}
                                label="UF CTPS" md="4"/> {/* CTPS */}
                <SingleComponent name="serie_ctps" 
                                value={seriectps}
                                handleInputChange={handleInputChange}
                                label="Série da CTPS" md="4"/> {/* CTPS */}
                <SingleComponent name="emissao_ctps" 
                                value={emissaoctps}
                                handleInputChange={handleInputChange}
                                label="Data de Emissão da CTPS" md="4"/> {/* CTPS */}
                <SingleComponent name="local_ctps"
                                value={localctps}
                                handleInputChange={handleInputChange}
                                label="Local de Expedição da CTPS" md="4"/> {/* CTPS */}
            </Row>
        </LegendField>
    )
}

export const RG = ({handleInputChange, setInputs, rgnumero, rgorgao, rguf, valueRgExpedicao}) => {
    return(
        <LegendField title="RG" titleSize="h3">
            <Row>
                <SingleComponent name="rg_numero"
                                value={rgnumero}
                                handleInputChange={handleInputChange}
                                label="Número RG" md="4"/>
                <SingleComponent label="RG Órgão"
                                    name="rg_orgao"
                                    value={rgorgao}
                                    handleInputChange={handleInputChange}
                                    md="4"/> 
                <SingleComponent label="RG UF"
                                    name="rg_uf"
                                    value={rguf}
                                    handleInputChange={handleInputChange}
                                    md="4"/>
                <DateCalendar label="Data de Expedição" 
                            name="rg_expedicao" 
                            setInputs={setInputs} 
                            value={valueRgExpedicao}/>
            </Row>
        </LegendField>
    )
}

export const Filiacao = ({nome_pai, nome_mae, cpf_pai, handleInputChange, cpf_mae}) => {
    return(
        <LegendField title="Filiação" titleSize="h3" >
            <Row>
                <SingleComponent name="nome_pai" value={nome_pai} label="Nome do Pai" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                <SingleComponent name="nome_mae"value={nome_mae} label="Nome da Mãe" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                <SingleComponent name="cpf_pai" value={cpf_pai} label="CPF do Pai" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
                <SingleComponent name="cpf_mae" value={cpf_mae} label="CPF da Mãe" md="4" handleInputChange={handleInputChange}/> {/* Filiação */}
            </Row>
        </LegendField>
    )
}

export const OutrosDados = ({handleInputChange, reservista, nis, sus, cnh, valueTipoSanguineo}) => {
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
        <LegendField title="Outros Dados" titleSize="h3">
            <Row>
                <SingleComponent label="Reservista" name="reservista" value={reservista} handleInputChange={handleInputChange} md="4"/> 
                <SingleComponent label="CNH" name="cnh" value={cnh} handleInputChange={handleInputChange} md="4"/> 
                <SingleComponent label="Número de Integração Social" value={nis} name="nis" handleInputChange={handleInputChange} md="4"/>
                <SingleComponent label="SUS" value={sus} name="sus" handleInputChange={handleInputChange} md="4"/>
                <CheckBox handleInputChange={handleInputChange} iterateList={Opcoes} label="É doador de Órgãos?" name="doador_orgaos"/>
                <OnlySelectComponent handleInputChange={handleInputChange} 
                    name="tipo_sanguineo" value={valueTipoSanguineo} iterateList={TipoSanguineo} md="2" label="Tipo Sanguíneo" />
            </Row>
        </ LegendField>
    )
}

export const Footer = ({ handleInputChange, selectValue }) => {
    const Status = ["Ativo", "Inativo"]
    return(
    <LegendField title="Cadastro">
        <DualRowComponent 
        readOnly1={true}
        readOnly2={true}
        firstlabel="Data de Cadastro" 
        secondlabel="Última Alteração">
            <OnlySelectComponent handleInputChange={handleInputChange} 
            name="situacao" value={selectValue} iterateList={Status} 
            md="3" label="Situação" />
        </DualRowComponent>
    </LegendField>
    )
}