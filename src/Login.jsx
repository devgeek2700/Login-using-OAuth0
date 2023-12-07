import React from 'react'

// https://localhost:5173/

function Login() {
  return (
    <>
       <div class="wrapper">
    <h2>Login</h2>
    <form action="#">
      <div class="input-box">
        <input type="email" placeholder="Enter your Email" name='email' required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div class="policy">
        <input type="checkbox"/>
        <h3>Remember me</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Login"/>
      </div>
      <div class="text">
        <h3>Create an account? <a href="#">Register</a></h3>
      </div>
    </form>
  </div>
    </>
  )
}

export default Login
