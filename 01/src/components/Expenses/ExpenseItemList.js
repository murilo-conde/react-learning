import "./ExpenseItemList.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const ExpenseItemList = (props) => {
  const {expenses} = props;

  return (
    <Card className="expense-list">
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </Card>
  );
}

export default ExpenseItemList;
