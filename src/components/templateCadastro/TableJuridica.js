import React from 'react'
import { DualRowComponent, LegendField} from './RowComponent'
import TableContatos from './TableContatos'

const TableJuridica = ({handleInputChange, email1, email2, razaoSocial, cnpj, telefone1, telefone2, celular1, celular2}) => (

    <LegendField title="Pessoa Jurídica" titleSize="h2">
        <DualRowComponent handleInputChange={handleInputChange}
            firstlabel="Razão Social"
            name1="razao_social"
            value1={razaoSocial}
            secondlabel="CNPJ:"
            name2="cnpj"
            value2={cnpj} />
        <TableContatos handleInputChange={handleInputChange}
            email1={email1}
            email2={email2}
            telefone1={telefone1}
            telefone2={telefone2}
            celular1={celular1}
            celular2={celular2} />
    </LegendField>
)

export default TableJuridica