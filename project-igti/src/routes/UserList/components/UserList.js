import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';

import { getContactService } from '../modules/userlist'

import Loading from './../../../components/utils/Loading';

class UserList extends Component {

  componentWillMount() {
    this.props.getContactService();
  }

  render() {

    if (!this.props.userlist || this.props.userlist.contacts.length === 0) {
      return (<Loading msg="Carregando contatos..." />)
    }

    if (this.props.userlist.contacts.status !== 200 || !this.props.userlist.contacts.data) {
      return (
        <Error msg={this.props.userlist} title="ListPedido" />
      )
    }

    const tr_contact = this.props.userlist.contacts.data.contacts.map(function (contact, index) {
      return (
        <tr key={index}>
          <td>{contact.id} </td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.avatarURL}</td>
        </tr>
      )
    })

    return (
      <div style={{ margin: "20px", border: "5px solid #3333338c" }}>
        <Table striped condensed hover className="dataTable" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Avatar Url</th>
            </tr>
          </thead>
          <tbody>
            {tr_contact}
          </tbody>
        </Table>
      </div >
    )
  }
};

export default UserList