import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from './actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task:", task.description);
    if (newDescription) {
      dispatch(editTodo(task.id, newDescription));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Task;