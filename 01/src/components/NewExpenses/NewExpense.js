import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm"
import Card from "../UI/Card"

const NewExpense = ({onAddExpanse}) => {
  const saveExpenseHandler = (data) => {
    const expense = {
      ...data,
      date: new Date(data.date),
      key: (Math.random() * 100000000000000000).toString()
    }

    onAddExpanse(expense)
  }

  return (
    <Card className="new-expense">
      <NewExpenseForm onSaveExpanse={saveExpenseHandler}/>
    </Card>
  )
}

export default NewExpense