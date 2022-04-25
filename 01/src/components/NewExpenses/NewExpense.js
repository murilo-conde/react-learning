import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm"
import Card from "../UI/Card"
import {useState} from "react"

const NewExpense = ({onAddExpanse}) => {
  const [showNewExpense, setShowNewExpense] = useState(false)

  const saveExpenseHandler = (data) => {
    const expense = {
      ...data,
      date: new Date(data.date),
      key: (Math.random() * 100000000000000000).toString()
    }

    onAddExpanse(expense)
    setShowNewExpense(false)
  }

  return (
    <Card className="new-expense">
      {showNewExpense && <NewExpenseForm onCancel={() => setShowNewExpense(false)} onSaveExpanse={saveExpenseHandler}/>}
      {!showNewExpense && <button onClick={() => setShowNewExpense(true)}>Add new expense</button>}
    </Card>
  )
}

export default NewExpense