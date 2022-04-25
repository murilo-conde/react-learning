import Card from "../UI/Card"

import './ExpensesSummary.css'
import ExpensesFilter from "./ExpensesFilter"
import Chart from "../Chart/Chart"


const ExpensesSummary = ({onFilter, expenses}) => {
  const dataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]


  for (const expense of expenses) {
    const month = expense.date.getMonth()
    dataPoints[month].value += expense.amount
  }

  const filterHandler = (data) => {
    onFilter(data)
  }

  return (
    <Card className="expense-summary">
      <ExpensesFilter onFilter={filterHandler}/>
      <Chart dataPoints={dataPoints}/>
    </Card>
  )
}

export default ExpensesSummary