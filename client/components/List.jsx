import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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

  const handleButtonClick = (event) => {
    event.preventDefault()
    navigate(`/item/${event.target.value}`)
  }

  function handleSelect(e, itemId) {
    if (e.keyCode == 13) {
      dispatch(getPrice(itemId))
    }
  }

  return (
    <>
      <h2 className="item-title">My Shopping List</h2>
      <p className="listHeading">Click item to add to list</p>

      <div className="overallContainer">
        <div className="basketContainer">
          <Basket basket={basket} setBasket={setBasket} />
        </div>
        <div className="listContainer">
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
                <div className="imageContainer">
                  <img
                    className="listImage"
                    src={item.image_url}
                    alt={item.item_name}
                  />
                  <div className="hoverText">Click to add to list</div>
                </div>
                <div className="listRow">
                  <h3 className="listName">{item.item_name}</h3>
                  <button
                    id="prices"
                    value={item.id}
                    name="prices"
                    onClick={handleButtonClick}
                    className="listButton"
                  >
                    Compare Prices
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default List
