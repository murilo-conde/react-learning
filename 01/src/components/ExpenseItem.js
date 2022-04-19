import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, name, value } = props;
  // const formattedDate = date.format()

  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">R$ {value}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
