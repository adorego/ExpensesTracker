import React,{useState} from 'react'

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title:'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title:'New TV',
      amount: 799,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title:'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title:'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ]
  const [expensesList, setExpensesList] = useState(expenses);
  
  const onExpenseFormSubmit = (expense) =>{
    console.log("Expense to add:", expense);
    setExpensesList((prev) => {
      return [
        expense,
        ...prev
      ]
    });
    console.log("Array with new expense:", expensesList);
  }
  return (
    <div>
      <NewExpense  onSubmitExpenseForm={onExpenseFormSubmit}/>
      <Expenses data={expensesList} />
    </div>
  );
}

export default App;
