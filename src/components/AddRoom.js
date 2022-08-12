import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AddRoomTodoView from './Todos/AddRoomTodoListView';

export default function AddRoom() {

  const [todoList, setTodoList] = useState([{}])
  const [id, setId] = useState('') 
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [roomTypeId, setRoomTypeId] = useState('')
  const [err, setErr] = useState(false)
    



// Read all todos
useEffect(() => {
  axios.get('http://localhost:8000/rooms/',
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
},[id]);

// Post a todo
const token = 'Bearer ' +  localStorage.getItem('token');
console.log(token);
const addTodoHandler = () => {
  axios.post('http://127.0.0.1:8000/rooms/', 
  { 'id': id, 'number': number , 'name': name, 'status':status,'room_type_id':roomTypeId},
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
    <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Room</h1>
    <h6 className="card text-white bg-primary mb-3">Hotel Booking Application</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Add Room</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setId(event.target.value)} placeholder='ID'/> 
      <input className="mb-2 form-control desIn" onChange={event => setNumber(event.target.value)}   placeholder='Number'/>
      <input className="mb-2 form-control desIn" onChange={event => setName(event.target.value)}   placeholder='Name'/>
      <input className="mb-2 form-control desIn" onChange={event => setStatus(event.target.value)}   placeholder='Status'/>
      <input className="mb-2 form-control desIn" onChange={event => setRoomTypeId(event.target.value)}   placeholder='Room Type ID'/>
    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Room</button>
    </span>
    <h5 className="card text-white bg-dark mb-3">Your Rooms</h5>
    <div >
      <AddRoomTodoView todoList={todoList} />
      </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" ><b>{err ? 'New Room Added' : 'Add New Room!!!'}</b></h6>
  </div>
  );
}


