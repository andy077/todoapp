import React from 'react';

const TodoList = (props) => {

    

    return (
        <>
        <div className='todo_style'>
        <p
        onClick={() => {
            props.onSelect(props.id);
        }} > Remove </p>
        <li>{props.text}</li>
        </div>
        </>
    )
}

export default TodoList;