import React, {useState, useContext} from "react";
import { GlobalContext } from "./GlobalState";

//type Props = {
// text: string,
// amount: number
//}

//в JavaScript версии он передал

const AddTransalctions = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
  
    const {addTransaction} = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);

    return(<><h3>Add new transaction</h3>
    <form id="form">
    <div className="form-control">
    <label for="text">Text</label>
    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
    </div>

    <div className="form-control">
    <label for="amount">Amount <br/>(negative - expense, positive - income)</label>
    <input type="text" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
    </div>
    <button className="btn"
    onSubmit = {(e) => {
        e.preventDefault();

        const newTransaction = {
            id: transactions[transactions.length -1].id + 1,
            name: text,
            amount: amount
        }

        addTransaction(newTransaction);
    }}
    >Add transaction</button>

    </form>
    </>
    )

}

export default AddTransalctions;