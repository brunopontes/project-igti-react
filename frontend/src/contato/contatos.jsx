import React from 'react';

import PageHeader from '../component/pageHeader';
import TodoForm from './contatosForm';
import TodoList from './contatosList';

export default props => (
    <div>
        <PageHeader name="Contatos"></PageHeader>
        <TodoForm/> 
        <TodoList />
    </div>
);