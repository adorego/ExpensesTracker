import "./ExpenseForm.css";

import React, {useState} from "react";

const ExpenseForm = (props) => {
    const [changedTitle, setChangedTitle] = useState("");
    const [changedAmount, setChangedAmount] = useState(0);
    const [changedDate, setChangedDate] = useState("");
    
    const titleChangeHandler = (event) =>{
        setChangedTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setChangedAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setChangedDate(event.target.value);
    }

    const onCancelClick = (e)=>{
        e.preventDefault();
        props.onCancelClick();
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const expense ={
            title:changedTitle,
            amount: Number(changedAmount),
            date: new Date(changedDate)
        }
        //console.log("Expense before submit:", expense);
        props.onExpenseFormSubmit(expense);
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={changedTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={changedAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="date" value={changedDate} onChange={dateChangeHandler} />
                </div>
                <button onClick={onCancelClick}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;