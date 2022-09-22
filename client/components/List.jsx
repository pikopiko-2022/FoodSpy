import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import { getPrice } from '../actions/price'
import { getItems } from '../actions/basket'
import Basket from './Basket'
import styles from './List.module.scss'

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
    if (!basket[itemId]) {
      setBasket({ ...basket, [itemId]: 1 })
    } else {
      const currentQuantity = basket[itemId]
      setBasket({ ...basket, [itemId]: currentQuantity + 1 })
    }
  }

  function handleSelect(e, itemId) {
    if (e.keyCode == 13) {
      dispatch(getPrice(itemId))
    }
  }

  return (
    <div>
      <h1>Choose grocery items:</h1>
      <div className={styles.container}>
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className={styles.foodContainer}
              role="button"
              onClick={() => handleClick(item.id)}
              onKeyDown={(e) => handleSelect(e, item.id)}
              tabIndex="0"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className={styles.image}
              />
              <h3>{item.name}</h3>
            </div>
          )
        })}
        <h2>Basket: </h2>
        <Basket basket={basket} />
      </div>
    </div>
  )
}

export default List
