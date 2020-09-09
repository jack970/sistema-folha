import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            value: '',
            option: 'coco',
            nomes: []
        }

        this.mudaOpcao = this.mudaOpcao.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.escutaNomes = this.escutaNomes.bind(this)
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    escutaNomes(event) {
        this.setState({
            nomes: event.target.value
        })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    mudaOpcao(event) {
        this.setState({
            option: event.target.value
        })
    }

    handleSubmit(event) {
        alert('Nome: ' + this.state.value + '\n'
        + 'Fruta: ' + this.state.option +  '\n' +
        'Nome Escolhido: ' + this.state.nomes
        )
        event.preventDefault()
    }

    render() {

        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ]
        console.log(this.state.date)
        console.log(this.state.option)
        return(
            <div>
                <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
                <hr />
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Nome:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Enviar"/>
                    <p>você digitou: {this.state.value} </p>
                    <hr/>
                    <select value={this.state.option} onChange={this.mudaOpcao}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">coco</option>
                        <option value="manga">Manga</option>
                    </select>
                    <select multiple={true} type='select-multiple' value={this.state.nomes} onChange={this.escutaNomes}>
                        {names.map((nome, id) => <option key={id} value={nome} > {nome} </option> )}
                    </select>
                </form>
            </div>
        )
    }
}

export default Clock