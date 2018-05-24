import React from 'react'
import PropTypes from 'prop-types'

import { Form, FormGroup, FormControl, Button, Panel, Image } from 'react-bootstrap'

export const User = () => (

  <Panel className="painel-cadastro"  style={{width:'40%', margin: '20px auto', textAlign:'center'}}>
    <Form>
      <div style={{width:'100px', height:'100px', backgroundColor:'#cccc', margin:'0 auto'}}/>
      <FormControl type="text" placeholder="Digite seu nome" style={{ margin: '10px auto', width:'90%' }} />
      <FormControl type="text" placeholder="Digite seu e-mail" style={{ margin: '10px auto', width:'90%' }}/>
      <Button bsStyle="primary" bsSize="medium" type="submit" active style={{  clear:'both',margin: '10px 20px', float:'right'}}> Cadastrar</Button>
    </Form>
  </Panel>

)

export default User
