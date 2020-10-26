import React from 'react'

const TableForm = ({cabecalho, children}) => (
    <table className="table mt-1">
        <thead>
            <tr>
                {cabecalho}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
)

export default TableForm