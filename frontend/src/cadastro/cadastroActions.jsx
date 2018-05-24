import axios from 'axios';
import { seach } from '../contato/contatosActions'

const URL = 'http://localhost:5001/contacts';


export const add = (nome, email, avatar) => {

    console.log(nome, email, avatar)

    const objeto = {
        name: nome,
        email: email
    }

    var config = { headers: { "Authorization": "whatever-you-want" } };
    axios.post(URL, { objeto })
            .then(resp => dispatch(search()));

    return dispatch => {
        
    };
};