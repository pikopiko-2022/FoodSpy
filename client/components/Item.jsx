import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Map from './Map'
import { getItemData, getItem, updateItemPrice } from '../apis/apiClient'
import ItemPrice from './ItemPrice'

const logError = (err) => console.log(err.message)

function Item() {
  const [item, setItem] = useState('')
  const [itemData, setItemData] = useState([])

  let { id } = useParams()

  useEffect(() => {
    if (itemData.length === 0) {
      getItemData(id)
        .then((d) => {
          setItemData(d)
        })
        .catch(logError)

      getItem(id)
        .then((d) => {
          setItem(d)
        })
        .catch(logError)
    }
  }, [itemData])

  useEffect(() => {
    getItemData(id)
      .then((d) => {
        setItemData(d)
      })
      .catch(logError)

    getItem(id)
      .then((d) => {
        setItem(d)
      })
      .catch(logError)
  }, [id])

  function handleUpdate(itemId, price) {
    // api send the request to update the item price
    updateItemPrice(itemId, price)
    setItemData([])
  }

  return (
    <>
      <div>
        <Link className="createList" to="/list">
          Create shopping list
        </Link>
      </div>
      {item && (
        <h1 className="item-title" data-testid="main-heading">
          Prices for {item.item_name}
        </h1>
      )}

      <div className="item-container">
        {itemData && (
          <div>
            {itemData.map((item) => (
              <ItemPrice
                key={item.id}
                item={item}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
        )}
      </div>

      <section className="map-section">
        <Map />
      </section>
    </>
  )
}

export default Item
