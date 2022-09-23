import React, { useState } from 'react'

function ItemPrice({ item, handleUpdate }) {
  const [itemUpdate, setItemUpdate] = useState('')

  const handleInput = (e) => {
    setItemUpdate(e.target.value)
  }
  return (
    <div className="item-result" key={item.id}>
      <img
        className="store-image"
        src={item.image}
        alt={item.name}
        width="200"
        height="200"
      />
      {item.location}
      <div> {item.description} </div>
      <div className="item-price">
        {' '}
        Price ${item.price}
        <button className="confirm-btn">Confirm Price</button>
      </div>
      <div className="update-price">
        <input
          type="text"
          name={`price_${item.itemPricesId}`}
          id={`Price_${item.itemPricesId}`}
          value={itemUpdate}
          onChange={handleInput}
        />

        <button
          className="update-btn"
          onClick={() => handleUpdate(item.itemPricesId, itemUpdate)}
        >
          Update Price
        </button>
      </div>
    </div>
  )
}
export default ItemPrice