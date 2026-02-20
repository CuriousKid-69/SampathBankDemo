import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddEmployee() {

  let navigate = useNavigate(); 
  
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: ""
  })
    
  const { firstName, lastName, email, salary } = employee

  const onInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8080/api/employees", employee)
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

          <h2 className='text-center m-4'>Register Employee</h2>

          <form onSubmit={onSubmit}>

            <div className='mb-3'>
              <label className='form-label'>
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee First Name"
                name="firstName"   
                value={firstName}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee Last Name"
                name="lastName"   
                value={lastName}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter employee email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                Salary
              </label>
              <input
                type="number"   
                className="form-control"
                placeholder="Enter employee salary"
                name="salary"
                value={salary}
                onChange={onInputChange}
              />
            </div>

            <button className='btn btn-primary' type='submit'>
              Submit
            </button>

            <Link to='/' className='btn btn-danger mx-2'>
              Cancel
            </Link>

          </form>
        </div>
      </div>
    </div>
  )
}