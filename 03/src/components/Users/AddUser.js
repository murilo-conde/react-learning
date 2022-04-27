import {useForm} from "react-hook-form"
import {useCallback, useEffect, useState} from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal"

const defaultValues = {
  username: "",
  age: null
}

const AddUser = ({onUserAdd}) => {
  const {register, handleSubmit, reset, setFocus, formState: {isSubmitSuccessful}} = useForm({defaultValues})
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const onSubmit = (data) => {
    data.age = +data.age
    onUserAdd(data)

    reset(defaultValues)
  }

  const onError = (errors) => {
    let msgs = []

    for (let err in errors) {
      msgs.push({
        key: err,
        message: `[${err}] ` + (errors[err].type === 'required' ? 'Required field missing!' : errors[err].message)
      })
    }

    setErrorMessages(msgs)
    setShowErrorModal(true)
  }

  const onClose = useCallback(() => {
    setShowErrorModal(false)
  }, [setShowErrorModal])

  useEffect(() => {
    setFocus("username")
  }, [setFocus, isSubmitSuccessful])

  return (
    <>
      <ErrorModal title="Error submitting form!" messages={errorMessages} visible={showErrorModal} onClose={onClose}/>
      <Card className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" {...register("username", {
            required: true, validate: value => value?.trim().length !== 0 || 'Field cannot be blank!'
          })}/>

          <label htmlFor="age">Age</label>
          <input id="age" type="number" step="1" {...register("age", {required: true, valueAsNumber: true, min: 1})}/>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser