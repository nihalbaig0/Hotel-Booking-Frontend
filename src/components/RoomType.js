import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RoomTypeTodoView from './Todos/RoomTypeTodoListView';

export default function RoomType() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  const [roomNo, setRoomNo] = useState('')
  const [err, setErr] = useState(false)
    
// Read all todos
useEffect(() => {
  axios.get('http://localhost:8000/room_type/',
  {
    headers: {
      "Content-Type": "application/json",
      Authorization : token,
    },
  }
    )
    .then(res => {
      setTodoList(res.data)
      
    })
},[title]);




// Post a todo
const token = 'Bearer ' +  localStorage.getItem('token');
console.log(token);
const addTodoHandler = () => {
  axios.post('http://127.0.0.1:8000/room_type/', 
  { 'id': title, 'description': desc , 'max_capacity': roomNo},
  {
  headers: {
    "Content-Type": "application/json",
    Authorization : token,
  },
}
  )
    .then(res => {
      console.log(res);
      setErr(true);
    }
      
      )
};



  return (
    <div className="Signin list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
    <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Room Type</h1>
    <h6 className="card text-white bg-primary mb-3">Hotel Booking Application</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Add Room Type</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='ID'/> 
      <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
      <input className="mb-2 form-control desIn" onChange={event => setRoomNo(event.target.value)}   placeholder='Max Capacity'/>
    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Room Type</button>
    </span>
    <h5 className="card text-white bg-dark mb-3">Your Room Types</h5>
    <div >
      <RoomTypeTodoView todoList={todoList} />
      </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" ><b>{err ? 'Room Type Added' : 'Give your custom Room!'}</b></h6>
  </div>
  );
}


