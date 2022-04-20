import Card from "../UI/Card"

import './ExpensesSummary.css'
import ExpensesFilter from "./ExpensesFilter"

const ExpensesSummary = ({onFilter}) => {
  const filterHandler = (data) => {
    onFilter(data)
  }

  return (
    <Card className="expense-summary">
      <ExpensesFilter onFilter={filterHandler}/>
    </Card>
  )
}

export default ExpensesSummary