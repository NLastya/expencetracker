import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';

//type props {
//amount:
//text
//}

const Transaction = ({transaction}) =>{
    const {deleteTransaction} = useContext(GlobalContext);

    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    console.log(deleteTransaction);

    const sign = transaction.amount > 0 ? '+': '-';

    return(
     <li className="minus"
     >
        Cash <span>{sign}${Math.abs(transaction.amount)}$</span>
        <button class="delete-btn"
        onClick = {() => deleteTransaction(transaction.id)}
        >x</button>
    </li>

    )
}

export default Transaction;