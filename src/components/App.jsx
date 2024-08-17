import React, { useState } from "react";

let list = [];

function App() {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);

  function handleListChange(event) {
    setListItem(event.target.value);
  }

  function addList() {
    setList((prevValues) => {
      return [...prevValues, listItem];
    });
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleListChange} type="text" value={listItem} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
