import React from 'react'
import './Nav.css'

export default () =>
{
    return(
    <aside className="menu-area">
        <nav className="menu">
            <a href="/" >
                <i className="fa fa-home"></i> Início
            </a>
            <a href="/users">
                <i className="fa fa-users"></i> Usuários
            </a>
            <a href="/produtos">
                <i className="fa fa-product-hunt"></i> Produtos
            </a>
            <a href="/folha">
                <i className="fa fa-product-hunt"></i> Folha
            </a>
        </nav>
    </aside>)}