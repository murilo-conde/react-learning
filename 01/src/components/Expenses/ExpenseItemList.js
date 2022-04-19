import "./ExpenseItemList.css";

import ExpenseCard from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const ExpenseItemList = (props) => {
  const {expenses} = props;

  return (
    <ExpenseCard className="expense-list">
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </ExpenseCard>
  );
}

export default ExpenseItemList;
