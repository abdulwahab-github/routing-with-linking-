import React from 'react'
import Home from "../components/Home"
import { useNavigate } from 'react-router-dom';
import AppRouter from '../config/Router'
function login() {
  return (
    <div>
      <div className='container '>
    <h1>Log-in</h1>
    <input type={'text'} placeholder="Write your name here" />
    <br/>
    <br />
    <input type={'text'} placeholder="Write your Father name here" />
    <br/>
    <br/>
    <input type={'password'} maxLength='11' placeholder="Write your Password here" />
    <br/>
    <br/>
    <input type={'password'} maxLength='11' placeholder="Write your Conform Password here" />
   <br/>
   <br/>
    <button>Singup</button>
    </div>
    </div>
  )
}

export default login