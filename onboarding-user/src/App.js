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
    // 🔥 STEP 3 - WE NEED TO FETCH FRIENDS FROM THE API!
    // and set them in state
    axios.get(url)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
  }


  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
