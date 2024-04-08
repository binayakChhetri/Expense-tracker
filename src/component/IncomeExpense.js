export function IncomeExpense({ income, expense }) {
  return (
    <>
      <div className="income-expense">
        <div className="item">
          <label htmlFor="income">Income </label>
          <p>${income}</p>
        </div>
        <div className="item">
          <label htmlFor="expense">Expense </label>
          <p>${expense}</p>
        </div>
      </div>
    </>
  );
}
