import axios from 'axios'
import React from 'react'

function RoomTypeTodo(props) {
    const deleteTodoHandler = (id) => {
    axios.delete(`http://localhost:8000/room_type/${id}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <b>ID: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.id} : </span> <br></br>
                <b>Description: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.description} </span>
                <br></br>
                <b>Max Capacity: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.max_capacity} </span>
                <br></br>
                <button onClick={() => deleteTodoHandler(props.todo.id)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default RoomTypeTodo;