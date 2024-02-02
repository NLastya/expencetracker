import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState';

const IncomeExpenses = () =>{

    const {transactions} = useContext(GlobalContext);


    const plusAmounts = transactions.map(transaction => transaction.amount > 0 ? transaction.amount: 0);
    const minusAmounts = transactions.map(transaction => transaction.amount < 0 ? transaction.amount: 0);

    const plusTotal = plusAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const minusTotal = minusAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return(<div>
        <div className="inc-exp-container">
           <div>
            <h4>Income</h4>
            <p id="money-plus" className="money-plus">{plusTotal}</p>
           </div>

           <h4>Expense</h4>
           <p id="monry-minus" className="money minus">{minusTotal}</p>
        </div>
    </div>)
}

export default IncomeExpenses;