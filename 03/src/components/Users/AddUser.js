import {useForm} from "react-hook-form"
import {useEffect} from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from './AddUser.module.css'

const defaultValues = {
  username: "",
  age: null
}

const AddUser = () => {
  const {register, handleSubmit, reset, setFocus} = useForm({defaultValues})

  const onSubmit = (data) => {
    data.age = +data.age
    console.log(data)

    reset(defaultValues)
  }

  useEffect(() => {
    setFocus("username")
  }, [setFocus, onSubmit])

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" {...register("username", {
          required: true, validate: value => value?.trim().length !== 0
        })}/>

        <label htmlFor="age">Age</label>
        <input id="age" type="number" step="1" {...register("age", {required: true, valueAsNumber: true, min: 1})}/>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser