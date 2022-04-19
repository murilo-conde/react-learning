import "./ExpenseItemList.css";

import ExpenseCard from "./ExpenseCard";
import ExpenseItem from "./ExpenseItem";

function ExpenseItemList(props) {
  const { expenses } = props;

  return (
    <ExpenseCard className="expense-list">
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </ExpenseCard>
  );
}

export default ExpenseItemList;
