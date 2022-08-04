import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const [entry, setEntry] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    const newEntry = { name: name, age: age, address: address };

    setEntry([...entry, newEntry]);
    setName("");
    setAge("");
    setAddress("");
    // console.log(entry);
  };

  return (
    <>
      <form className="App" onSubmit={Submit}>
        <span>Name</span>
        <input
          type="text"
          autoComplete="off"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <span>Age</span>
        <input
          name="age"
          autoComplete="off"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <span>Address</span>
        <input
          type="Text"
          autoComplete="off"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <button>Submit</button>
      </form>

      <div class="Main-div">
        {entry.map((cur) => {
          const { name, age, address } = cur;

          return (
            <div class="List">
              <li>
                <span>Name -</span>
                {name}
              </li>

              <li>
                <span>Age -</span>
                {age}
              </li>

              <li>
                <span>Address -</span>
                {address}
              </li>
          
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
