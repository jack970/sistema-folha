import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import "../styles/global"
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default (props) =>{
    
    return(
    <BrowserRouter>
        <div className="app">
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>)}