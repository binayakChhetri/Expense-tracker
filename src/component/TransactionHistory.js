import { Item } from "./Item";

export default function HistorySection({
  transactionHistory,
  onDeleteHistory,
}) {
  return (
    <>
      <ul className="history-section">
        <h2>Transaction History</h2>
        {transactionHistory.length === 0 ? (
          <h3 className="no-transacs">No transactions history available</h3>
        ) : (
          transactionHistory
            .reverse()
            .map((product) => (
              <Item
                product={product}
                key={product.id}
                onDeleteHistory={onDeleteHistory}
              />
            ))
        )}
      </ul>
    </>
  );
}
