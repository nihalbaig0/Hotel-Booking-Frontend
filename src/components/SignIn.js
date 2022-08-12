import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function SignIn() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  
    



//   // Post a todo
//   const addTodoHandler = () => {
//     axios.post('http://127.0.0.1:8000/login/', { 'username': title, 'password': desc })
//       .then(res => console.log(res))
// };

// Post a todo
const addTodoHandler = () => {
  axios.post('http://127.0.0.1:8000/login/', 
  { 'username': title, 'password': desc },
  {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}
  )
    .then(res => {
      console.log(res);
      if(res.status == 200){
        localStorage.setItem("token",res.data.access_token)
      }
    
    }
      
      )
};



  return (
    <div className="Signin list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
    <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">SIGN IN</h1>
    <h6 className="card text-white bg-primary mb-3">Hotel Booking Application</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Please Log in to your account</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Email'/> 
      <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Password'/>
    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Log In</button>
    </span>
    <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
    <div >
    
    </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021, All rights reserved &copy;</h6>
  </div>
  );
}


