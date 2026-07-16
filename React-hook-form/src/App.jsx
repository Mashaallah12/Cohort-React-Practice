import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import UserCard from "./Components/UserCard";
import Form from "./Components/Form";

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([])
  return (
    <div className="h-screen bg-[oklch(15.3% 0.006 107.1)]">
      <div className="p-4">
        <NavBar setToggle={setToggle} />
      </div>
      {toggle ? (
        <div className="p-4 flex items-center justify-center gap-4">
         {
          users.map((elem)=>{
            return <UserCard user={elem} />
          })
         }
        </div>
      ) : (
        <div>
          <Form setUsers={setUsers} setToggle={setToggle}/>
        </div>
      )}
    </div>
  );
};

export default App;
