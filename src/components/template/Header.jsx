import React from 'react'
import './Header.css'

export default (props) => {

    //proceed to return header
    return(
    <header className="header d-sm-flex flex-column">
        <h1 className="mt-3 overflow-hidden">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted overflow-hidden">{props.subtitle}</p>
    </header>)
    
}