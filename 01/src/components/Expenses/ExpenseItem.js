import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const {date, name, value} = props;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date}/>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">R$ {value}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
