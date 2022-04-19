import "./Card.css";

const ExpenseCard = (props) => {
  const {className, children} = props;
  return <div className={`expense-card ${className}`}>{children}</div>;
}

export default ExpenseCard;
