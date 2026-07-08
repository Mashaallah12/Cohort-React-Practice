import React from 'react'

const UserCard = ({users , del}) => {
  
  
  return (
    <div className='flex p-2'>
        <main className='border-2 p-2 flex flex-col items-center gap-2 shadow-xl border-none bg-black text-white rounded'>
          <img className='rounded-[50%] h-20 w-20' src={users.image} alt="loading" />
          <h2 className='text-lg font-sans'>{users.name}</h2>
          <h3>{users.profession}</h3>
          <h4>{users.address}</h4>
          <h5>{users.salary}</h5>
          <button onClick={()=> del(users.id)} className=' p-2 border rounded bg-red-600 w-full'>delete</button>
        </main>
    </div>
  )
}

export default UserCard
