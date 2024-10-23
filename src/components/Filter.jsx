import React from 'react';
//komponent ktory filtruje w zaleznosci od wartosci wybranego option i zwraca selecta
const Filter = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="all">Wszystkie zadania</option>
      <option value="completed">Zadania wykonane</option>
      <option value="notCompleted">Zadania niewykonane</option>
    </select>
  );
};

export default Filter;
