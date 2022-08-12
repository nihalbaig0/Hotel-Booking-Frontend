import RoomTypeTodo from "./RoomTypeTodo"

export default function RoomTypeTodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map(todo => <RoomTypeTodo todo={todo} />)}
            </ul>
        </div>
    )
}