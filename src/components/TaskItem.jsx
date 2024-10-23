import React from 'react';
//komponent ktory zwraca poszczególny TaskItem (konkretne zadanie z checkboxem i buttonem do usuwania)
const TaskItem = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={task.completed ? "crossed" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      {task.text}
      <button onClick={() => deleteTask(index)}>Usuń</button>
    </div>
  );
};

export default TaskItem;
