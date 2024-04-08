import { useState } from "react";

export function UserInput({
  handleTransactionHistory,
  setExpense,
  setIncome,
  balance,
}) {
  const [inputExp, setInputExp] = useState("");
  const [inputExpAmount, setInputExpAmount] = useState("");

  // This function will handle the add button action
  function handleAdd() {
    if (!inputExp || !inputExpAmount || inputExpAmount < 0) return;
    const earnings =
      inputExp.toLowerCase() === "salary" || inputExp.toLowerCase() === "bonus"
        ? true
        : false;

    if (inputExpAmount > balance && !earnings) {
      alert("Your expense can't be grater than your balance");
      return;
    }

    earnings
      ? setIncome((income) => (income += inputExpAmount))
      : setExpense((expense) => (expense += inputExpAmount));

    const item = {
      id: crypto.randomUUID(),
      itemName: inputExp,
      price: inputExpAmount,
      earnings,
    };
    handleTransactionHistory(item);
    setInputExp("");
    setInputExpAmount("");
  }
  return (
    <>
      <div className="user-input">
        <label htmlFor="expense">Enter expense</label>
        <input
          type="text"
          id="expense"
          value={inputExp}
          onChange={(e) => setInputExp(e.target.value)}
        />
      </div>
      <div className="user-input">
        <label htmlFor="amount">Enter amount</label>
        <input
          type="number"
          id="amount"
          value={inputExpAmount}
          onChange={(e) => {
            setInputExpAmount(Number(e.target.value));
          }}
        />
      </div>
      <button
        className="add-exp-amt"
        onClick={() => {
          handleAdd();
        }}
      >
        Add
      </button>
    </>
  );
}
