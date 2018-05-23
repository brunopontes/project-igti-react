import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const LIST_CONTACTS = 'CONTACTS'

// ------------------------------------
// Actions
// ------------------------------------

export const getContactService = () => async dispatch => {

  var config = { headers: { "Authorization": "whatever-you-want" } };

  const request = await axios.get(`http://localhost:5001/contacts`, config)
  dispatch({
    type: LIST_CONTACTS,
    payload: request
  })
}

export const actions = {
  getContactService
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LIST_CONTACTS]: (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function ticketReducer(state, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
