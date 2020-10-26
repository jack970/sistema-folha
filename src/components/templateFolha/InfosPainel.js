import React from "react"
import InfoLabel from './InfoLabel'

const InfosPainel = (allinfo) => {
    return(
        <>
            <div className="row">
                <div className="col-md-5">
                    <InfoLabel label="Nome">
                        {allinfo.info.map(info => info.nome.trim())} {/* PEGA NOME */}
                    </InfoLabel>
                </div>
                <div className="col-md-3">
                    <InfoLabel label="CPF">
                        {allinfo.info.map(info => info.cic)} {/* PEGA cpf */}
                    </InfoLabel>
                </div>
                <div className="col-md-3">
                    <InfoLabel label="Cargo">
                        {allinfo.info.map(info => info.cargo)} {/* PEGA CARGO */}
                    </InfoLabel>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <InfoLabel label="Número de Matrícula">
                        {allinfo.info.map(info => info.matricula)} {/* PEGA MATRICULA */}
                    </InfoLabel>
                </div>
                <div className="col-md-3">
                    <InfoLabel label="Departamento">
                        {allinfo.info.map(info => info.departamento)} {/* PEGA DEPARTAMENTO */}
                    </InfoLabel>
                </div>
                <div className="col-md-3">
                    <InfoLabel label="Data de Admissão:">
                        {allinfo.info.map(info => new Date(info.admissao).toLocaleDateString())} {/* PEGA ADMISSAO */}
                    </InfoLabel>
                </div>
            </div>
        </>
    )
}

export default InfosPainel