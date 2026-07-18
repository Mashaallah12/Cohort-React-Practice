import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import UserCard from "./Components/UserCard";
import Form from "./Components/Form";

const App = () => {
  let [toggle, setToggle] = useState(true);

  let [update, setUpdate] = useState(null);

  
  let [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  let deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="h-screen bg-[oklch(15.3% 0.006 107.1)]">
      <div className="p-4">
        <NavBar setToggle={setToggle} />
      </div>
      {toggle ? (
        <div className="p-4 flex items-center justify-center gap-4">
          {users.map((elem, index) => {
            return (
              <UserCard
                setToggle={setToggle}
                setUpdate={setUpdate}
                ind={index}
                deleteUser={deleteUser}
                key={index}
                user={elem}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form update={update} users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
