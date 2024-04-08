import React, { useState } from "react";
import AddExpenseSection from "./addExpense";
import HistorySection from "./TransactionHistory";

function App() {
  const history = [];
  // This state will track down the income and the expenses
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Making state for keeping the records of all transaction's history
  const [transactionHistory, addTransactionHistory] = useState(history);
  function handleTransactionHistory(history) {
    addTransactionHistory((currHistroy) => [...currHistroy, history]);
  }

  // This function will handle the delete button actions
  function handleDeleteTransactionHistory(history) {
    addTransactionHistory((transactions) =>
      transactions.filter((item) => item.id !== history.id)
    );

    history.earnings
      ? setIncome((income) => income - history.price)
      : setExpense((currExpense) => currExpense - history.price);
  }

  return (
    <>
      <div className="app">
        <AddExpenseSection
          handleTransactionHistory={handleTransactionHistory}
          income={income}
          expense={expense}
          setExpense={setExpense}
          setIncome={setIncome}
        />
        <HistorySection
          transactionHistory={transactionHistory.slice().reverse()}
          onDeleteHistory={handleDeleteTransactionHistory}
        />
      </div>
    </>
  );
}

export default App;
