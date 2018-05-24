import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../component/iconButton';
import { markAsDone, markAsPending, remove } from './contatosActions';

const ContatosList = props => {
    const renderRows = () => {

        var list = props.list || [];

        if (!list.data)
            return

        console.log(list.data.contacts)

        return list.data.contacts.map( (contact, index) => (
            <tr key={index}>
                <td>{contact.id} </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.avatarURL}</td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    {/* <th className="tableActions">Ações</th> */}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ContatosList);