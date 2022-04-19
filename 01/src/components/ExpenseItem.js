import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseCard from "./ExpenseCard";

function ExpenseItem(props) {
  const { date, name, value } = props;

  return (
    <ExpenseCard className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">R$ {value}</div>
      </div>
    </ExpenseCard>
  );
}

export default ExpenseItem;
