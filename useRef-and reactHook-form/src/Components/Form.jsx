import React, { useRef } from "react";

const Form = () => {
  let inpRef = useRef(null);
  let priceRef = useRef(null);
  let catRef = useRef(null);
  let imgRef = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(inpRef.current.value);
    console.log(priceRef.current.value);
    console.log(catRef.current.value);
    console.log(imgRef.current.value);
  };
  return (
    <div>
      <main className="bg-black text-white rounded">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4 p-4 w-[400px] text-color-white"
        >
          <input
            ref={inpRef}
            className="rounded border p-2"
            type="text"
            placeholder="product name"
          />
          <input
            ref={priceRef}
            className="rounded border p-2"
            type="number"
            placeholder="price"
          />
          <div className="border p-2 rounded">
            <span className=" p-2">catogrey:</span>
            <select ref={catRef} className="border bg-black">
              <option value="mens">mens</option>
              <option value="women">women</option>
              <option value="kids">kids</option>
            </select>
          </div>
          <input
            ref={imgRef}
            className="rounded border p-2"
            type="text"
            placeholder="image"
          />
          <button className="border rounded width-fit p-2 bg-red-600">
            create
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form;
 