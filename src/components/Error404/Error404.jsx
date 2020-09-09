import React from 'react'
import Main from '../template/Main'
import Clock from '../Clock'

export default props =>
    <Main icon="home" title="404"
        subtitle="Segundo Projeto do capítulo de React.">
        <div className="display-4">Erro 404!</div>
        <Clock />
        <hr />
        <p className="mb-0">Nada foi encontrado!</p>
    </Main>