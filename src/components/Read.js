import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Read() {
  const [data, setData] = useState([])
  const [tabledark, setTableDark] = useState("")

  const getData = () => {
    axios
      .get('https://6390293265ff4183110acaf8.mockapi.io/Post')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`https://6390293265ff4183110acaf8.mockapi.io/Post/${id}`)
      .then(() => {
        getData()
      })
  }

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === 'table-dark') setTableDark("");
            else setTableDark('table-dark');
          }}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Toggle
        </label>
      </div>

      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        classsName="btn-sucess"
                        onClick={() =>
                          setLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete{' '}
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table>
    </>
  )
}

export default Read
