import React from 'react'
import TableForm from '../../components/template/TableForm'
import PdfGenerate from '../PdfGenerate'
import { group_by } from '../PdfGenerate/GroupBy'
import { FormatReal} from '../PdfGenerate/formatReal'

const GridView = ({infos}) => {
    
    const groupedByMes = group_by(infos, 'mes') // Agrupado de acordo com mes

    const ListOrderedByMes = []
    const filteredByMes = array =>{
        Object.keys(array).forEach(key => {
            const elemento = array[key][0]
            return ListOrderedByMes.push(elemento)
        }, {})
    }
    filteredByMes(groupedByMes)

    return(
    <TableForm cabecalho={
        <>
            <th>Contrato/Matrícula</th>
            <th>Ano</th>
            <th>Mês</th>
            <th>Tipo de Folha</th>
            <th>Proventos</th>
            <th>Descontos</th>
            <th>Líquido</th>
            <th>Ações</th>
        </>
    }>
        {
        ListOrderedByMes.map((pessoa, id) => {
        const parcela = pessoa.parcela === "U" ? "Normal" : "Complementar"

        return(
            <tr key={id}>
                <td>{pessoa.matricula}</td>
                <td>{pessoa.ano}</td>
                <td>{pessoa.mes}</td>
                <td>{parcela}</td>
                <td>R$ {FormatReal(pessoa.proventos)}</td>
                <td>R$ {FormatReal(pessoa.descontos)}</td>
                <td>R$ {FormatReal(pessoa.liquido)}</td>
                <td>
                    <PdfGenerate data={groupedByMes[pessoa.mes]}/>
                </td>
            </tr>
            )}
        )}
    </TableForm>
    )
}

export default GridView