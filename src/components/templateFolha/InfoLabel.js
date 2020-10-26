import React from 'react'

const InfoLabel = ({ label, children}) => {
    return(
        <div className="form-group">
            <label><b>{label}</b></label>
            <span className="h-auto form-control pd-label-input-leitura" >
                {children}
            </span>
        </div>
    )
}

export default InfoLabel