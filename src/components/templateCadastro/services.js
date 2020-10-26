import {useEffect, useState} from 'react'
import axios from 'axios'

const GetCityState = () => {
    const [listUf, setListUf] = useState([]);
    const [listCity, setListCity] = useState([]);

    const IBGE_API = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/'
    })

    const loadUf = () => {
        IBGE_API.get('api/v1/localidades/estados')
        .then(response => response.data)
        .then(data => {        
            data.sort((a,b) => a.nome.localeCompare(b.nome));
            setListUf([...data]);
       })
    }

    useEffect(loadUf ,[])

    const loadCity = (id) => {
        IBGE_API.get(`api/v1/localidades/estados/${id}/municipios`)
          .then(response => response.data)
          .then(data => {        
            data.sort((a,b) => a.nome.localeCompare(b.nome));
            setListCity([...data]);
           });
    }

    return {
        listUf, listCity, loadCity
    }
}

export default GetCityState