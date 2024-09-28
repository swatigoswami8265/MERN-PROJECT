import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const handleAddToCart = async () => {
    let food =[] 
    for (const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }

    let finalPrice = qty * parseFloat(options[size] || 0); // Use parseFloat to ensure accurate price

    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: 'UPDATE',
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty
        });
      } else if(food.size !== size){
        await dispatch({
          type: 'ADD',
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size
        });
      }
    } else {
      await dispatch({
        type: 'ADD',
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size
      });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: '150px', objectFit: 'fill' }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 Fs-5">₹{qty * parseFloat(options[size] || 0)}/-</div>
            <hr />
            <button className="btn btn-success justify-content ms-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
