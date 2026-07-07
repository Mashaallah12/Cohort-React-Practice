import React from 'react'

const ProductCard = ({product, del}) => {

 
    
    
  return (
    <div className='p-4 border-2 rounded flex flex-col gap-1 w-fit'>
      <div className='w-50'>
        <img src={product.image} alt="loading" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title.substring(0,20)}</h2>
        <h3 className='text-green-600'>price$ {product.price}</h3>
        <h4 className='text-xs'>{product.category}</h4>
      </div>
      <button onClick={()=> del(product.id)}  className='bg-red-500 p-0.5 rounded'>delete</button>
    </div>
  )
}

export default ProductCard
