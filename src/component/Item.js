export function Item({ product, onDeleteHistory }) {
  return (
    <li>
      <div className={product.earnings ? "rec earnings" : "rec spendings"}>
        <button onClick={() => onDeleteHistory(product)}>❌</button>
        <p>{product.itemName}</p>
        <p>${product.price}</p>
      </div>
    </li>
  );
}
