import React from 'react'
import Form from './Components/Form'
import ReactHookForm from './Components/ReactHookForm'

const App = () => {
  return (
    <div className='h-screen bg-red-400 flex flex-col gap-4 items-center justify-center'>
      <h1 className='text-2xl uppercase font-bold text-white'>create form</h1>
      {/* <Form /> */}
      <ReactHookForm />
    </div>
  )
}

export default App
