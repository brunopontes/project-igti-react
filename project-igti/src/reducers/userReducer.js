const INITIAL_STATE = {
    contacts: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {     
        case 'ADD-CONTACT':
            return { ...state, contacts: action.payload }
        default:
            return state
    }
}