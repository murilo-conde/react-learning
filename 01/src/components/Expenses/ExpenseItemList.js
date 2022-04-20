import "./ExpenseItemList.css"

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const ExpenseItemList = ({expenses, year}) => {
  return (
    <Card className="expense-list">
      {expenses.filter(expense => expense.date.getFullYear().toString() === year.toString()).map(expense => {
        return <ExpenseItem {...expense} />
      })}

      {expenses.filter(expense => expense.date.getFullYear().toString() === year.toString()).length === 0 ?
        <p style={{color: "#ffffff"}}>No expenses found</p> : ""}
    </Card>
  )
}

export default ExpenseItemList
