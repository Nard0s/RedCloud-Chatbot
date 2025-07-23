import React from 'react'
import InputField from '../Shared/InputField'

const RegisterForm = () => {
  return (
    <div>
      <h1>Register</h1>
      Name:<InputField/>
      email:<InputField/>
      password:<InputField/>
      Confirm:<InputField/>
    </div>
  )
}

export default RegisterForm
