import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const {date, title, amount} = props;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R$ {amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
