import React, { useState } from 'react'

function ItemPrice({ item, handleUpdate }) {
  const [itemUpdate, setItemUpdate] = useState('')

  const handleInput = (e) => {
    setItemUpdate(e.target.value)
  }
  const localDate = (utcDate) => {
    return new Date(utcDate).toLocaleString()
  }
  return (
    <div className="item-result" key={item.id}>
      <img
        className="store-image"
        src={item.image}
        alt={item.item_name}
        width="200"
        height="200"
      />
      <div className="item-location"> {item.location}</div>

      <div> {item.description} </div>
      <div className="item-price">
        {' '}
        Price ${Number(item.price).toFixed(2)}
        <button className="confirm-btn">Confirm Price</button>
      </div>
      <div className="update-price">
        <input
          type="text"
          name={`price_${item.itemPricesId}`}
          id={`Price_${item.itemPricesId}`}
          value={itemUpdate}
          aria-label="price-input"
          onChange={handleInput}
        />

        <button
          className="update-btn"
          onClick={() => handleUpdate(item.itemPricesId, itemUpdate)}
        >
          Update Price
        </button>
      </div>
      <div className="last-updated">
        {localDate(item.update_at)}(Last updated)
      </div>
    </div>
  )
}
export default ItemPrice
