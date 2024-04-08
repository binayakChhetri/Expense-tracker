import { useState } from "react";
import { IncomeExpense } from "./IncomeExpense";
import { UserInput } from "./UserInput";

export default function AddExpenseSection({
  handleTransactionHistory,
  income,
  expense,
  setExpense,
  setIncome,
}) {
  const balance = income - expense;
  const [showAddExpense, setShowAddExpense] = useState(false);
  return (
    <div className="add-expense-section">
      <div className="blc">
        <label htmlFor="balance">Balance </label>
        <span>${balance}</span>
      </div>
      <IncomeExpense income={income} expense={expense} />
      {showAddExpense && (
        <UserInput
          handleTransactionHistory={handleTransactionHistory}
          setExpense={setExpense}
          setIncome={setIncome}
          balance={balance}
        />
      )}
      <button
        className="add-expense-btn"
        onClick={() => setShowAddExpense(!showAddExpense)}
      >
        {showAddExpense ? "Close" : "Add expense"}
      </button>
    </div>
  );
}
