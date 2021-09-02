import * as React from "react";
import { TodosContext } from "../../todo-context";
import { Checkbox } from "../Checkbox/Checkbox";
import "./TodoList.scss";


export const TodoList = () => {

    const { todos, setTodos } = React.useContext(TodosContext);

    const handleDelete = (id) =>
    {
       setTodos(todos.filter(todo=>(todo.id!==id)
       ))
    };

    const toggleCheck = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id===id){
                return {
                    id: todo.id,
                    label: todo.label,
                    checked: !todo.checked
                }
            } else {
                return todo
            }
        }))
    };

    const handleKeyUp = (e, id) => {
        if (e.keyCode === 13) {
            toggleCheck(id);
        }
    };

    return (
        <div className="todo-list">
            <span className="todo-list-title">Things to do:</span>
            {todos.length ? (
                <div className="todo-list-content">
                    {todos.map((todoItem) => (
                        <Checkbox
                            key={todoItem.id}
                            label={todoItem.label}
                            checked={todoItem.checked}
                            onClick={() => toggleCheck(todoItem.id)}
                            onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                            onDelete={() => handleDelete(todoItem.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-todos">
                    Looks like you&apos;re absolutely free today!
                </div>
            )}
        </div>
    );
};
