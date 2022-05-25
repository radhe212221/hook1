import React, { useState } from 'react';
import './style.css';

export default function App() {
  const intialStock = {
    item: '',
    price: 0,
    qty: 0,
  };
  const [stock, setstock] = useState([intialStock]);

  const addmore = () => {
    setstock([...stock, intialStock]);
  };
  const handleChange = (i, name, e) => {
    let value = e.target.value;
    setstock(
      stock?.map((x, index) => (index === i ? { ...x, [name]: value } : x))
    );
  };

  const totalPrice = stock
    .map((x) => +x.price)
    .reduce((sum, next) => sum + next);

  const totalQty = stock.map((x) => +x.qty).reduce((sum, next) => sum + next);

  return (
    <div>
      {stock?.map((item, index) => (
        <div className="stock-item">
          <h3>item : {index} </h3>
          <input
            onChange={(e) => handleChange(index, 'item', e)}
            value={item?.item}
            placeholder={'enter item :' + index}
          />
          <input
            onChange={(e) => handleChange(index, 'price', e)}
            value={item?.price}
            placeholder={'enter price :' + index}
          />
          <input
            onChange={(e) => handleChange(index, 'qty', e)}
            value={item?.qty}
            placeholder={'enter qty :' + index}
          />
        </div>
      ))}
      <button onClick={addmore}>add more </button>
      <h1>
        totalItems: {stock.length} {'  '}
        totalPrice: {totalPrice} {'  '}
        totalQty: {totalQty} {'  '}
      </h1>
    </div>
  );
}
