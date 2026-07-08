import React from "react";

const EcomCard = ({Edata, del}) => {
  
    
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* Product Image */}
      <img
        src={Edata.image}
        alt="Product"
        className="w-full h-56 object-cover"
      />

      {/* Product Details */}
      <div className="p-5">

        <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
         {Edata.category}
        </span>

        <h2 className="text-xl font-bold mt-3">
          {Edata.name}
        </h2>

        <p className="text-gray-500 mt-2">
          Brand: <span className="font-semibold">{Edata.brand}</span>
        </p>

        <div className="flex justify-between mt-4">
          <p className="text-yellow-500 font-semibold">
           ⭐ {Edata.rating}
          </p>

          <p className="text-green-600 font-semibold">
            Stock:{Edata.stock}
          </p>
        </div>

        <h3 className="text-2xl font-bold text-indigo-600 mt-4">
          Price:${Edata.price}
        </h3>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Buy Now
          </button>

          <button onClick={()=>del(Edata.id)} className="bg-red-500 text-white px-5 rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default EcomCard;