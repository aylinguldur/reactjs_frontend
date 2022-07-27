import React, { useState } from "react"
import '../NewExpense/NewExpense.css';
import ExpenseForm from "../NewExpense/ExpenseForm.js";

const NewExpense = (props) => {

    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

return(
    <div className="new-expense">
        { !isEditing && 
        (<button className="new-expense__actions" onClick={startEditingHandler}>Add New Expense</button>)}
        { isEditing &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }
    </div>
);
};

export default NewExpense;