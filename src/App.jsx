import React, { useState } from 'react';
import TodoList from './TodoList';


const App = () => {

    const [newData, setNewData] = useState('');
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setNewData(event.target.value);
    }
    const addItem = () => {
        setItems((oldItems) => {
            return [...oldItems, newData];
        });
        setNewData('');
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((currElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                <h1>ToDo List</h1>

                <div className='input_div'>
                    <div className='input_div_inner'>
                        <input type='text' placeholder='Things to Do...' value={newData} onChange={inputEvent} />
                        <button onClick={addItem}>ADD</button>
                    </div>
                </div>

            </div>
            <div className='list_div'>
                <ol>
                    {items.map((itemVal, index) => {
                        return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItems} />
                    })}
                </ol>
            </div>
        </>
    )

}

export default App;