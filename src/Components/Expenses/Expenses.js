import "./Expenses.css"

import React, {useState} from 'react'

import Card from '../UI/Card'
import ExpenseChart from './ExpensesChart'
import ExpenseFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {
    const initialYear = '2021';
    const [selectedYear, setSelectedYear] = useState(initialYear);
    

    const onFilterSelected = (selectedYear__param) =>{
        setSelectedYear(selectedYear__param);
        
    }

    const selectedExpenses = props.data.filter((item) => {
        const year = String(item.date.getFullYear());
        return selectedYear === year
    })
    
    

    

    return(
        
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onFilterSelected={onFilterSelected} />
            <ExpenseChart expenses={selectedExpenses}/>
            <ExpensesList data={selectedExpenses}/>
        </Card>
    )
}

export default Expenses