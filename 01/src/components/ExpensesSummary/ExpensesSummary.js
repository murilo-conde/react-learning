import Card from "../UI/Card"

import './ExpensesSummary.css'
import ExpensesFilter from "./ExpensesFilter"
import Chart from "../Chart/Chart"

const dataPoints = [
  {label: 'teste', value: 8.5, max: 10}
]

const ExpensesSummary = ({onFilter}) => {
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