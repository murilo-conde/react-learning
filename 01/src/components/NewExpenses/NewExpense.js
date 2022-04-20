import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

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
    <div className="new-expense">
      <NewExpenseForm onSaveExpanse={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense