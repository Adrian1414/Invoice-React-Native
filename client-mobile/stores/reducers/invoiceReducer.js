let initialState = { 
    invoices: []
}

export default function invoiceReducer(state = initialState, action) {
    switch (action.type) {
        case 'invoices/fetchAll':
            return {...state, invoices: action.payload}
       
        default:
            return state
    }
}