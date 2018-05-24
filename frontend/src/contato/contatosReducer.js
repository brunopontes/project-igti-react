const INITIAL_STATE = { description: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONTATOS_SEARCHED':
            return { ...state, list: action.payload };
        case 'CONTATOS_ADD':
            // let lists = statate.list;
            // lists.put(action.payload)
            console.log('ta aqui a lista'); 
            return { ...state, list: action.payload };
        default:
            return state;
    };
};