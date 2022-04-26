import React, {useState} from 'react'
import styled from "styled-components"

import Button from '../../UI/Button/Button'

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

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
      <FormControl className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </FormControl>
      <Button type="submit" disabled={!isValid}>Add Goal</Button>
    </form>
  )
}

export default CourseInput
