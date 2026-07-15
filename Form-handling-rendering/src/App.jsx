import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([]);
  return (
    <div>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setUsers={setUsers} setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
