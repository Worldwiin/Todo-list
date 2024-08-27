import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <span onClick={() => completeTodo(index)}>{todo.text}</span>
            <div>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;
