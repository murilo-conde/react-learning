import React, {useState} from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const goalInputChangeHandler = event => {
    const value = event.target?.value?.trim()

    if (value && value.length > 0) {
      setEnteredValue(event.target.value)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit" disabled={!isValid}>Add Goal</Button>
    </form>
  )
}

export default CourseInput
