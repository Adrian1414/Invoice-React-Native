let initialState = { 
    customers: []
}

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case 'customers/fetchAll':
            return {...state, customers: action.payload}
       
        default:
            return state
    }
}