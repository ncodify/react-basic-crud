import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // const header = { 'Access-Control-Allow-Origin': '*' }

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked")
    axios.post('https://6390293265ff4183110acaf8.mockapi.io/Post', {
      name: name,
      email: email,
    })
    .then(()=>{
      history("/read");
    })
  }

  return (
    <>
    <div className='d-flex justify-content-between m-2'>
      <h2>CREATE</h2>
      <Link to='/read'>
      <button className='btn btn-primary'>Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Create
