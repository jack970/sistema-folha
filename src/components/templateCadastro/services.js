import {useEffect, useState} from 'react'
import axios from 'axios'

const GetCityState = uf => {
    const [listUf, setListUf] = useState([]);
    const [listCity, setListCity] = useState([]);

    const IBGE_API = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/'
    })

    useEffect(() => {
        const loadUf = () => {
            IBGE_API.get('api/v1/localidades/estados')
            .then(response => response.data)
            .then(data => {        
                data.sort((a,b) => a.nome.localeCompare(b.nome));
                setListUf([...data]);
           })
        }
        try{
            loadUf()
        }catch(e){
            console.error(e)
        }
    // eslint-disable-next-line
    },[])
    
    
    useEffect(()=> {
        
        const loadCity = (id) => {
            IBGE_API.get(`api/v1/localidades/estados/${id}/municipios`)
              .then(response => response.data)
              .then(data => {        
                data.sort((a,b) => a.nome.localeCompare(b.nome));
                setListCity([...data]);
               });
        }
        try{
            loadCity(uf)   
        }catch(e){
            console.error(e)
        }
    // eslint-disable-next-line
    }, [uf]); 

    return {
        listUf, listCity
    }
}

export default GetCityState