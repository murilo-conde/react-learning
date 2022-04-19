import "./ExpenseCard.css";

function ExpenseCard(props) {
  const { className, children } = props;
  return <div className={`expense-card ${className}`}>{children}</div>;
}

export default ExpenseCard;
