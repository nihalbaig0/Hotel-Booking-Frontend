import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function SignUp() {


  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  const [err, setErr] = useState(false)
    





// Post a todo
const addTodoHandler = () => {
  axios.post('http://127.0.0.1:8000/users/', 
  { 'email': title, 'password': desc }
  

  )
    .then(res => {
      console.log(res);
      setErr(true);
    }
      
      )
};



  return (
    <div className="Signin list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
    <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">SIGN UP</h1>
    <h6 className="card text-white bg-primary mb-3">Hotel Booking Application</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Welcome, please create an account!</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Email'/> 
      <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Password'/>
    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Create New Account</button>
    </span>
   
    <div >
    
    </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" ><b>{err ? 'Sign Up Successful' : 'Sign Up now!!!'}</b></h6>
    
  </div>
  );
}


