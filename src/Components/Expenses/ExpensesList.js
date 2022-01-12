import "./ExpensesList.css"

import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = (props) => {
    
    if(props.data.length === 0){
        return(
            <h2 className="expenses-list__fallback">No expenses found!</h2>
        )
    }
    if(props.data.length > 0){
        return(
            <ul className="expenses-list">
                {
                    props.data.map(
                        (expense) =>(
                            (<ExpenseItem key={expense.id} data={expense} />)    
                        )
                    )
                }
            </ul>
        ) 
        
        
    }
}

export default ExpensesList