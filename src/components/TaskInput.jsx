import React from 'react';
//Komponent w ktorym znajduje sie input 
const TaskInput = ({ addTask }) => {
  const handleSave = () => {
    const input = document.getElementById("input").value;
    if (input.trim()) {
      addTask(input);
      document.getElementById("input").value = ""; // resetujemy inputa po dodaniu zadania
    }
  };

  return (
    <div>
      <input type="text" placeholder="Wpisz nazwę zadania" id="input" />
      <button onClick={handleSave}>Dodaj zadanie</button>
    </div>
  );
};
//Dodawanie zmiany 
export default TaskInput;
