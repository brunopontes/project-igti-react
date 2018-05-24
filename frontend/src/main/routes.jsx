import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Contatos from '../contato/contatos';
import Alunos from '../alunos/alunos';
import Cadastro from '../cadastro/cadastro';

export default props => (
    <Router history={hashHistory}>
        <Route path="/contatos" component={Contatos} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/alunos" component={Alunos} />
        <Redirect from="*" to='/contatos' />
    </Router>
);