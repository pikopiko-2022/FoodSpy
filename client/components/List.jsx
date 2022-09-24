import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import { getPrice } from '../actions/price'
import { getItems } from '../actions/basket'
import Basket from './Basket'

function List() {
  const [basket, setBasket] = useState({})

  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
    dispatch(getItems())
  }, [])

  function handleClick(itemId) {
    const item = list.find((el) => el.id == itemId)
    if (!basket[itemId]) {
      setBasket({ ...basket, [itemId]: { name: item.item_name, quantity: 1 } })
    } else {
      const currentQuantity = basket[itemId].quantity
      setBasket({
        ...basket,
        [itemId]: { name: item.item_name, quantity: currentQuantity + 1 },
      })
    }
  }

  function handleSelect(e, itemId) {
    if (e.keyCode == 13) {
      dispatch(getPrice(itemId))
    }
  }

  return (
    <div className="overallContainer">
      <div className="listContainer">
        <h2>Add items to your basket:</h2>
        <div>
          {list.map((item) => {
            return (
              <div
                key={item.id}
                className="foodContainer"
                role="button"
                onClick={() => handleClick(item.id)}
                onKeyDown={(e) => handleSelect(e, item.id)}
                tabIndex="0"
              >
                <img
                  className="listImage"
                  src={item.image_url}
                  alt={item.item_name}
                />
                <h3 className="listHeading">{item.item_name}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className="basketContainer">
        <h2>Basket: </h2>
        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </div>
  )
}

export default List
