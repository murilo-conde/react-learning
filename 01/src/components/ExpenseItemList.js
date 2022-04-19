import "./ExpenseItemList.css";

import ExpenseItem from "./ExpenseItem";

function ExpenseItemList(props) {
  const { expenses } = props;

  return (
    <div className="expense-list">
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </div>
  );
}

export default ExpenseItemList