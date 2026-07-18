import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
const Form = ({ setUsers, setToggle, users, update }) => {
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: update,
  });
  const formSubmit = (data) => {
    if (update) {
      setUsers((prev)=>{
        return prev.map((val)=>{
          return val.id === update.id ? {...data} : val;
        });
      });
    }else{
       let arr = [...users, {...data, id:nanoid() }];
       setUsers(arr);
       localStorage.setItem("users", JSON.stringify(arr));
      console.log(arr);
      
       
    }
    reset();
    setToggle((prev) => !prev);
  };
 
  

  return (
    <div className="flex flex-col gap-4 w-[100%] items-center justify-center">
      <h1 className="text-3xl text-white">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-70 flex flex-col gap-3 p-4 rounded border-white bg-black text-white "
      >
        {errors.name && <p className="text-red-900">{errors.name.message}</p>}
        <input
          {...register("name", {
            required: " enter name required",
            pattern: {
              value: /^\S.*$/,
              message: "blank space are not allowed",
            },
          })}
          className=" text-white p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="enter name"
        />
        {errors.email && <p className="text-red-900">{errors.email.message}</p>}
        <input
          {...register("email", {
            required: "required email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "enter valid email id",
            },
          })}
          className=" text-white p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="enter email"
        />
        {errors.number && (
          <p className="text-red-900">{errors.number.message}</p>
        )}
        <input
          {...register("number", {
            required: "required mobile number",
            minLength: {
              value: 10,
              message: "minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits are required",
            },
          })}
          className=" text-white p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="enter mobile number"
        />
        {errors.image && <p className="text-red-900">{errors.image.message}</p>}
        <input
          {...register("image", { required: "required img url" })}
          className=" text-white p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="image"
        />
        <button className="p-2 bg-sky-600 rounded">add user</button>
      </form>
    </div>
  );
};

export default Form;
