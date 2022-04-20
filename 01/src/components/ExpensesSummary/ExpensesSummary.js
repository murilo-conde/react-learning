import Card from "../UI/Card"

import './ExpensesSummary.css'
import ExpensesFilter from "./ExpensesFilter"

const ExpensesSummary = () => {
  return (
    <Card className="expense-summary">
      <ExpensesFilter/>
    </Card>
  )
}

export default ExpensesSummary