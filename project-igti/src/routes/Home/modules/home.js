// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
