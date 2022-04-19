import './NewExpenseForm.css'

import {useForm} from "react-hook-form";

const NewExpenseForm = () => {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" {...register("title")}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" {...register("amount")} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" {...register("date")}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default NewExpenseForm