import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './redux/action'
import './todolist.css'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editedText, setEditedText] = useState('');
    const [editedId, setEditedId] = useState(null);

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        dispatch(addTodo({ id: Date.now(), text: newTodo }));
        setNewTodo('');
    };

    const handleEditTodo = () => {
        if (editedText.trim() === '') return;
        dispatch(editTodo(editedId, editedText));
        setEditedId(null);
        setEditedText('');
    };

    return (
        <div className='container'>
            <h1>Todo List</h1>
            <input
                className='textfile'
                type="text"
                placeholder="add new items"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo} className='btn'>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editedId === todo.id ? (
                            <>
                                <input
                                    className='outputlist'
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />&nbsp;&nbsp;
                                <button className='btn1' onClick={handleEditTodo}>Save</button>&nbsp;&nbsp;
                            </>
                        ) : (
                            <>
                               <div className='list'> {todo.text}</div>&nbsp;&nbsp;
                                <button className='btn1' onClick={() => setEditedId(todo.id)}>Edit </button>&nbsp;&nbsp;
                            </>
                        )}
                        <button className='btn1' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default TodoList;
