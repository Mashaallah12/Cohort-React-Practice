import React from "react";

const UserCard = ({ user, deleteUser, ind, setToggle, setUpdate }) => {
  return (
    <div className="border rounded h-[300px] w-[250px] p-3 bg-black">
      <div>
        <img
          className="h-[150px] w-full rounded"
          src={user.image}
          alt="loading"
        />
      </div>
      <div className="text-white text-bold p-2">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.contact}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setUpdate(user);
            setToggle((prev) => !prev);
          }}
          className="bg-yellow-400 p-2 rounded"
        >
          update
        </button>
        <button
          onClick={() => deleteUser(ind)}
          className="bg-red-400 p-2 rounded"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
