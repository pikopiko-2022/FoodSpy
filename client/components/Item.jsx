import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Map from './Map'
import { getItemData, getItem, updateItemPrice } from '../apis/apiClient'

function Item() {
  const [item, setItem] = useState('')
  const [itemData, setItemData] = useState([])
  const [itemUpdate, setItemUpdate] = useState('')

  let { id } = useParams()
  useEffect(() => {
    getItemData(id)
      .then((d) => {
        console.log(d)
        setItemData(d)
      })
      .catch((err) => {
        console.log(err)
      })
    getItem(id)
      .then((d) => {
        setItem(d)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(itemData)

  function handleUpdate(id) {
    // api send the request to update the item price
    //e.preventDefault()
    console.log('hello' + id)
    updateItemPrice(id, itemUpdate)
  }

  return (
    <>
      <div className="item-container">
        {item && <h1 className="item-title">Prices for {item.name}</h1>}
        {itemData && (
          <ul>
            {itemData.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="275"
                  height="350"
                ></img>
                {item.location} - ${item.price}
                {/* <form onSubmit={handleSubmit}> */}
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={itemUpdate}
                  onChange={setItemUpdate}
                ></input>
                <button onClick={() => handleUpdate(item.itemPricesId)}>
                  Update
                </button>
                <button>Confirm</button>
                {/* </form> */}
              </li>
            ))}
          </ul>
        )}

        <section className="map-section">
          <Map />
        </section>
      </div>
    </>
  )
}

export default Item
