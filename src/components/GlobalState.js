import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
    {id: 1, text: 'Flower', amount: -20},
    {id: 2, text: 'Flower', amount: 300},
    {id: 3, text: 'Flower', amount: -10},
    {id: 4, text: 'Camera', amount: 150},
    ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //action - чтобы удалять транзакции через интерфейс
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }

    return (<GlobalContext.Provider 
    value={{transactions: state.transactions,
    deleteTransaction,
    addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )

})

