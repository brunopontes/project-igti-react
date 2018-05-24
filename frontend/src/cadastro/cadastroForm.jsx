import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../component/grid';
import IconButton from '../component/iconButton';

import {add} from './cadastroActions'

class CadastroForm extends Component {

    constructor() {
        super();

        this.state = {
            nome: '',
            email: '',
            avatar: null
        }

        this.mudouNome = this.mudouNome.bind(this);
        this.mudouEmail = this.mudouEmail.bind(this);
        this.mudouAvatar = this.mudouAvatar.bind(this);
    }

    mudouNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    mudouEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    mudouAvatar(e) {
        this.setState({ ...this.state, avatar: e.target.value })
    }

    render() {
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">

                    <label>Adicione uma foto</label>
                    <input type="file" className="form-control-file" 
                    id="avatar" 
                    onChange={this.mudouAvatar}
                    style={{ marginBottom: '10px' }} />
                    
                    <label>Nome</label>
                    <input id="nome" className="form-control"
                        placeholder="Digite o nome"
                        value={this.state.nome}
                        onChange={this.mudouNome} style={{ marginBottom: '10px' }}></input>

                    <label>Email</label>
                    <input id="email" className="form-control"
                        placeholder="Digite o email"
                        value={this.state.email}
                        onChange={this.mudouEmail} style={{ marginBottom: '10px' }}></input>

                    <IconButton style="primary" icon="plus" text="Adicionar"  
                    onClick={() => add(this.state.nome, this.state.email, this.state.avatar)} />
                </Grid>
            </div>
        )
    }
}

// const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({add}, dispatch);
export default connect(null, mapDispatchToProps)(CadastroForm);