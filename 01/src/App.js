import ExpenseItemList from "./components/Expenses/ExpenseItemList"
import NewExpense from "./components/NewExpenses/NewExpense"
import {useState} from "react"
import ExpensesSummary from "./components/ExpensesSummary/ExpensesSummary"

const defaultExpenses = [
  {key: "asdghaspid", title: "Seguro do carro", date: new Date(2022, 1, 18), amount: 2156.0},
  {key: "asdas", title: "Ifood", date: new Date(2022, 1, 18), amount: 86.0},
]

const App = () => {
  const [expenses, setExpenses] = useState(defaultExpenses)
  const [year, setYear] = useState(2022)

  const addExpenseHandler = (data) => {
    setExpenses((prev) => {
      return [...prev, data]
    })
  }

  const filterHandler = (data) => {
    setYear(data)
  }

  return (
    <div>
      <NewExpense onAddExpanse={addExpenseHandler}/>
      <ExpensesSummary onFilter={filterHandler}/>
      <ExpenseItemList expenses={expenses} year={year}/>
    </div>
  )
}

export default App
