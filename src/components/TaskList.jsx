import React from 'react';
import TaskItem from './TaskItem';
//komponent ktory zwraca liste zadan wypelniona TaskItemami
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div id="listaZadan">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
