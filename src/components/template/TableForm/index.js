import React from 'react'

const TableForm = ({cabecalho, children}) => (
    <table className="table mt-4">
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