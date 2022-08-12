import axios from 'axios'
import React from 'react'

function BookingTodo(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/reservation/${title}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <b>Date In: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.date_in} : </span> <br></br>
                <b>Date Out: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.date_out} </span>
                <br></br>
                <b>Room No: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.room_no} </span>
                <br></br>
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default BookingTodo;