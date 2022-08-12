import AddRoomTodo from "./AddRoomTodo"

export default function AddRoomTodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map(todo => <AddRoomTodo todo={todo} />)}
            </ul>
        </div>
    )
}