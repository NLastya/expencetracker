import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList';
import AddTransalctions from './components/addTransactions';

import GlobalProvider from './components/AppReducer.js'
import IncomeExpenses from './components/IncomeExpenses.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList />
      <AddTransalctions/>
    </div>
  );
}

export default App;
