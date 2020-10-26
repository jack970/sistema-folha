import React, { useState, useEffect} from 'react'
import api from '../../services/api'
import Main from '../template/Main'
import TableForm from '../../components/template/TableForm'

const headerProps = {
    icon: 'fa fa-product-hunt',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos: Incluir, LIstar, Alterar e Excluir'
}

const ProductCrud = () => {
    const [products, setProducts] = useState([])
    const [inputs, setInputs] = useState([])

    useEffect(() => {
        api.get('products').then(response => {
            setProducts(response.data)
        })
    }, [])
  
    const getUpdatedList = (product, add = true) => {
        const list = products.filter(u => u.id !== product.id)

        if(add){ 
            list.unshift(product)
            return list
    }
    }

    const remove = (id) => {
        api.delete(`products/${id}`).then(response => {
            const list = products.filter(u => u.id !== id)
            setProducts(list)
        })
    }
    const clear = (e) => {
        setInputs({})
        e.preventDefault() 
    }

    const save = (e) => {
        const method = inputs.id ? 'put' : 'post'
        const url = inputs.id ? `products/${inputs.id}` : `products`
        api[method](url, inputs)
            .then(response => {
                const products = getUpdatedList(response.data)
                setProducts(products)
            })
        e.preventDefault()
    }

    const updateField = (event) => {
        event.persist()
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    const load = (produto) => {
        setInputs(produto)
    }

    return(
        <Main {...headerProps}>
            <form id="form">
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Produto</label>
                                <input type="text" className="form-control" 
                                    value={inputs.produto || ''}
                                    name="produto"
                                    onChange={(e) => updateField(e)}
                                    placeholder="Digite o nome do produto..."/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Quantidade</label>
                                <input type="text" className="form-control"
                                    value={inputs.quantidade || ''}
                                    name="quantidade"
                                    onChange={(e) => updateField(e)}
                                    placeholder="Digite a quantidade..." />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Preço</label>
                                <input type="text" className="form-control"
                                    value={inputs.preco || ''}
                                    onChange={(e) => updateField(e)}
                                    name="preco"                        
                                    placeholder="Digite o preço..." />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={(e) => save(e)}>
                                Salvar
                            </button>
                            <button className="btn btn-secondary ml-2" onClick={(e) => clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <TableForm cabecalho={
                <>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </>
            }>
                {products.map(product => {return(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.produto}</td>
                    <td>{product.quantidade}</td>
                    <td>{product.preco}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => load(product)}
                            >
                            <i className="fa fa-pencil" 
                            ></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => remove(product.id)}
                            >
                            <i className="fa fa-trash"
                            ></i>
                        </button>
                    </td>
                </tr>)}
                )}
            </TableForm>
        </Main>
    )
}

export default ProductCrud