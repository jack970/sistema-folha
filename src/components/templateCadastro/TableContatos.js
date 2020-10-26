import React from 'react'
import { Row, LegendField, SingleComponent } from './RowComponent'

const TableContatos = ({telefone1, telefone2, celular1, celular2, email1, email2, handleInputChange}) =>
    <LegendField title="Contatos">
        <Row>
            <SingleComponent label="Telefone 1" name="telefone1" value={telefone1} handleInputChange={handleInputChange} md="3"/>
            <SingleComponent label="Telefone 2" name="telefone2" value={telefone2} handleInputChange={handleInputChange} md="3"/>
            <SingleComponent label="Celular 1" name="celular1"  value={celular1} handleInputChange={handleInputChange} md="3"/>
            <SingleComponent label="Celular 2" name="celular2" value={celular2} handleInputChange={handleInputChange} md="3"/>
        </Row>
        <Row>
            <SingleComponent label="Email 1" name="email1" value={email1} handleInputChange={handleInputChange} md="6"/>
            <SingleComponent label="Email 2" name="email2" value={email2} handleInputChange={handleInputChange} md="6"/>
        </Row>
    </LegendField>

export default TableContatos