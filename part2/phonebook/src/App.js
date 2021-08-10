import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNames = (event) => {
    event.preventDefault();

    let duplicates = persons.find((person) => person.name === newName);

    if (duplicates !== undefined) {

      window.alert(newName + ' is already added to phonebook');

    } else {
      const personObject = {
        name: newName,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addNames}>
        <div>
          name:
          <input value={newName} onChange={handlePersonChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map((person) => (
          <li key={person.name}> {person.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
