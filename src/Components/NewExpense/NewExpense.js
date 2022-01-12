import "./NewExpense.css"

import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showOnlyButton, setShowOnlyButton] = useState(true);
    
    const onButtonClickHandler = (event) =>{
        console.log("Event clicked!", event.target.value);
        setShowOnlyButton(false);
    }

    const onButtonCancelHandler = () =>{
        setShowOnlyButton(true);
    }
    const onSubmitExpenseForm = (expense)=>{
        const expenseWithId = {
            ...expense,
            id:String(Math.random()*100)
        }
        //console.log("Expense with id:", expenseWithId);
        props.onSubmitExpenseForm(expenseWithId);
    }
    
    if(showOnlyButton){
        return(
            <div className="new-expense">
                <button onClick={onButtonClickHandler}>Add New Expense</button>
            </div>
        )
    }else{
        return(
            <div className="new-expense">
                <ExpenseForm onExpenseFormSubmit={onSubmitExpenseForm} onCancelClick={onButtonCancelHandler}/>
            </div>
        )
    }
}

export default NewExpense;