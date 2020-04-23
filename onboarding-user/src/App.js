import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'

const url = 'https://reqres.in/api/users'
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  TOS: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}
function App() {
  const [users, setUsers] = useState([])
  const [userValues, setUserValues] = useState(initialFormValues)
  // 🔥 STEP 1 - WE NEED STATE TO KEEP TRACK OF WHETHER SUBMIT BUTTON IS DISABLED!
  const [formDisabled, setFormDisabled] = useState(true)
  // 🔥 STEP 2 - WE NEED STATE TO KEEP TRACK OF THE VALIDATION ERRORS!
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUsers = () => {
    // 🔥 STEP 3 - WE NEED TO FETCH users FROM THE API!
    // and set them in state
    axios.get(url)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    // 🔥 STEP 4 - AFTER THE FIRST DOM SURGERY WE NEED users FROM API!
    getUsers()
  }, [])

  const postUser = user => {
    // 🔥 STEP 5 - WE NEED A FUNCTION TO POST A NEW user TO THE API!
    // and set the updated list of users in state
    // the endpoint responds (on success) with the new user (with id !!)
    axios.post(url, user)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
    }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: userValues,
      email: userValues,
      password: userValues,
      TOS: Object.keys(userValues.TOS),
    }
  }
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // 🔥 STEP 9 - IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
    // and update the form errors slice of state (so the form can display errors)

    setUserValues({
      ...userValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setUserValues({
      ...userValues,
      TOS: {
        ...userValues.TOS,
        [name]: isChecked,
      }
    })
  }

  return (
    <div className="App">
      <Form 
      values={userValues}
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange}
      onSubmit={onSubmit}
      disabled={formDisabled}
      errors={formErrors}/>
    </div>
  );
}

export default App;
