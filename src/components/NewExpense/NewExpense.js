import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };
  const startAddingHandler = () => {
    setIsAdding(true);
  };
  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
