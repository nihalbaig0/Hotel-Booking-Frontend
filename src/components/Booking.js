import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BookingTodoView from './Todos/BookingTodoListView';

export default function Booking() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  const [roomNo, setRoomNo] = useState('')
  const [err, setErr] = useState(false)
    
 // Read all todos
 useEffect(() => {
  axios.get('http://localhost:8000/reservation/',
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
  axios.post('http://127.0.0.1:8000/reservation/', 
  { 'date_in': title, 'date_out': desc , 'room_no': roomNo},
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
    <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Booking Page</h1>
    <h6 className="card text-white bg-primary mb-3">Hotel Booking Application</h6>
   <div className="card-body">
    <h5 className="card text-white bg-dark mb-3">Reserve your room</h5>
    <span className="card-text"> 
      <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Date In'/> 
      <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Date Out'/>
      <input className="mb-2 form-control desIn" onChange={event => setRoomNo(event.target.value)}   placeholder='Room NO'/>
    <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Book Now</button>
    </span>
    <h5 className="card text-white bg-dark mb-3">All Bookings</h5>
    <div >
      <BookingTodoView todoList={todoList} />
      </div>
    <div >
    
    </div>
    </div>
    <h6 className="card text-dark bg-warning py-1 mb-0" ><b>{err ? 'Booked Successfully' : 'Hurry up to get your seat!!'}</b></h6>
  </div>
  );
}


