import "./ExpenseItemList.css"

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const ExpenseItemList = ({expenses}) => {
  return (
    <Card className="expense-list">
      {expenses.map(expense => {
        return <ExpenseItem {...expense} />
      })}

      {expenses.length === 0 ? <p style={{color: "#ffffff"}}>No expenses found</p> : ""}
    </Card>
  )
}

export default ExpenseItemList
