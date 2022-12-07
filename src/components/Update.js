import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {
  const [id, setId] = useState(0)
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('id>>>>>', id)
    axios
      .put(`https://6390293265ff4183110acaf8.mockapi.io/Post/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate('/read')
      })
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
  }, [])

  return (
    <>
      <h2>UPDATE/EDIT</h2>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to='/read'>
        <button type="submit" className="btn btn-secondary mx-2">
          Back
        </button>
        </Link>
      </form>
    </>
  )
}

export default Update
