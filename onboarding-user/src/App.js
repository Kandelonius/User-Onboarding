import React, { useState, useEffect } from 'react'
import Form from './Form'
import User from './User'
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
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'username must have at least 2 characters! ')
    .required('username is required'),
  email: yup
    .string()
    .email('a VALID email is required ')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'password must have at least 6 characters! ')
    .required('password is required'),
})
function App() {
  const [users, setUsers] = useState([])
  const [userValues, setUserValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        setUsers([...users, res.data])
        // debugger
      })
      .catch(err => {
        console.log(users.data)
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(userValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [userValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: userValues.username,
      email: userValues.email,
      password: userValues.password,
      TOS: Object.keys(userValues.TOS),
    }
    postUser(newUser)
    setUserValues(initialFormValues)
  }
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

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
        errors={formErrors} />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })
      }
    </div>
  )
}

export default App;
