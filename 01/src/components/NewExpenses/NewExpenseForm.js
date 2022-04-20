import './NewExpenseForm.css'

import {useForm} from "react-hook-form";
import {useEffect} from "react";

const defaultValues = {
  title: "",
  amount: "",
  date: ""
}

const NewExpenseForm = ({onSaveExpanse}) => {
  const {register, handleSubmit, reset, setFocus} = useForm({defaultValues})

  const onSubmit = (data) => {
    reset(defaultValues)
    onSaveExpanse(data)
  }

  useEffect(() => {
    setFocus("title");
  }, [onSubmit]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" defaultValue="" {...register("title", {required: true})}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" defaultValue="" {...register("amount", {required: true})} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" defaultValue="" {...register("date", {required: true})}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default NewExpenseForm