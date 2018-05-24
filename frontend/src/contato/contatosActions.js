import axios from 'axios';

const URL = 'http://localhost:5001/contacts';


export const search = () => {
    return (dispatch, getState) => {
        // console.log('Veio aqui')
        var config = { headers: { "Authorization": "whatever-you-want" } };
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}`, config)
            .then(resp => dispatch({type: 'CONTATOS_SEARCHED', payload: resp}))
    };
};


// export const markAsDone = todo => {
//     return dispatch => {
//         axios.put(`${URL}/${todo._id}`, {...todo, done: true})
//             .then(resp => dispatch(search()));
//     };
// };

// export const markAsPending = todo => {
//     return dispatch => {
//         axios.put(`${URL}/${todo._id}`, {...todo, done: false})
//             .then(resp => dispatch(search()));
//     };
// };

// export const remove = todo => {
//     return dispatch => {
//         axios.delete(`${URL}/${todo._id}`)
//             .then(resp => dispatch(search()));
//     };
// };

// export const clear = () => {
//     return [{type: 'TODO_CLEAR'}, search()];
// };