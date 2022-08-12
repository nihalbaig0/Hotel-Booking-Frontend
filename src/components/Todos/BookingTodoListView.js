import BookingTodo from "./BookingTodo"

export default function BookingTodoView(props) {
    return (
        <div>
            <ul>
                {props.todoList.map(todo => <BookingTodo todo={todo} />)}
            </ul>
        </div>
    )
}