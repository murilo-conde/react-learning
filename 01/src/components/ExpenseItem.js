import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem(props) {
  const { date, name, value } = props;

  return (
    <div className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">R$ {value}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
