import axios from 'axios'
import React from 'react'

function AddRoomTodo(props) {
    const deleteTodoHandler = (id) => {
    axios.delete(`http://localhost:8000/rooms/${id}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <b>ID: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.id} : </span> <br></br>
                <b>Number: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.number} </span>
                <br></br>
                <b>Name: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.name} </span>
                <br></br>
                <b>Status: </b>
                <span style={{ fontWeight: 'bold, underline' }}>{props.todo.status} </span>
                <br></br>
                {/* <span style={{ fontWeight: 'bold, underline' }}>{props.todo.room_type.description} </span>
                <br></br> */}
                <button onClick={() => deleteTodoHandler(props.todo.id)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default AddRoomTodo;