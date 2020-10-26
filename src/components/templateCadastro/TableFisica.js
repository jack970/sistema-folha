import React from 'react'
import { LegendField, SingleComponent, CheckBox} from './RowComponent'
import TableContatos from './TableContatos'

const TableFisica = ({ CPF, telefone1, telefone2, email1, email2, celular1, celular2, handleInputChange}) => {
    const Cargos = [
        {
            value: "emitente",
            label: "Emitente"
        },
        {
            value: "cliente",
            label: "Cliente"
        },
        {
            value: "fornecedor",
            label: "Fornecedor",
        },
        {
            value: "transportador",
            label: "Transportador"
        },
        {
            value: "colaborador",
            label: "Colaborador"
        }
    ]
    return(
    <LegendField title="Pessoa Física" titleSize="h2">
        <SingleComponent name="cpf" value={CPF} handleInputChange={handleInputChange} label="CPF" md="5"/>
        <CheckBox label="Tipo de Cargo" name="cargo" iterateList={Cargos} handleInputChange={handleInputChange} />
        <TableContatos 
            email1={email1} 
            email2={email2} 
            telefone1={telefone1} 
            telefone2={telefone2} 
            celular1={celular1} 
            celular2={celular2} 
            handleInputChange={handleInputChange} />
    </LegendField>
    )
}

export default TableFisica