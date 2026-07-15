import React from 'react'
import { useForm } from 'react-hook-form';
const ReactHookForm = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data)=>{
    console.log(data);
    reset();
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} className='border rounded flex flex-col p-4 gap-4'>
        <input {...register("name")}  className='border rounded p-2' type="text" placeholder='enter name' />
        <input {...register("email")} className='border rounded p-2' type="email" placeholder='enter email' />
        <input {...register("password")} className='border rounded p-2' type="password" placeholder='enter password' />
        <button className='border rounded p-2 '>Login</button>
      </form>
    </div>
  )
}

export default ReactHookForm
