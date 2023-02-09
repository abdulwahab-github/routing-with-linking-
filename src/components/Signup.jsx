import "../App.css"
// import { Link , Route , Routes } from 'react-router-dom';
import Login from "../components/Login"
import Home from "../components/Home"
import AppRouter from '../config/Router'

function Signup() {

  return (
    <>
    <div className='container '>
    <h1>Sign Up</h1>
    <input type={'text'} placeholder="Write your name here" />
    <br/>
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
    <br/>
   
    </div> 
    



    
    </>
  )
}

export default Signup;