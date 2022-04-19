function ExpenseItemDate(props) {
  const { date } = props;
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });
  const month = date.toLocaleString("pt-BR", { month: "short" });
  const year = date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseItemDate;
