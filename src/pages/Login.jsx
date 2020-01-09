import React from 'react'
import axios from "axios"


const Login = () => {

  const onSubmit = async (e) => {
    e.preventDefault()
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const remember = document.querySelector("#idMember").value

    if (username === '' || password === '' || remember === '') {
      console.log(`check input`);
    }
    else {
      const data = { username, password, remember }
      console.log(data)
      const { data: result } = await axios.post(`https://substock.gethomestay.com/login/`, data)
      const { user, token } = result
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))

      document.querySelector("#username").value = ''
      document.querySelector("#password").value = ''
      document.querySelector("#idMember").value = ''
      window.location.reload()
    }
  }

  return (
    <div className="container formLogin">
      <h1 style={ { textAlign: "center" } }>Login</h1><br />
      <form onSubmit={ onSubmit }>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-3 col-form-label">username</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="username" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="idMember" className="col-sm-3 col-form-label">ID Member</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="idMember"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary col-sm-10 col-md-3 " >Sign in</button>

      </form>
    </div>
  )
}

export default Login
