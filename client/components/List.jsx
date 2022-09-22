import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import { getPrice } from '../actions/price'
import styles from './List.module.scss'

function List() {
  const list = useSelector((state) => {
    return state.list
  })

  const items = useSelector((state) => {
    return state.price
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [])

  function handleClick(itemId) {
    dispatch(getPrice(itemId))
  }

  let price = 0

  if (items.length !== 0) {
    const first = items[0]
    const firstItem = Object.values(first)
    const firstPrice = firstItem[6]
    const second = items[1]
    const secondItem = Object.values(second)
    const secondPrice = secondItem[6]
    const third = items[2]
    const thirdItem = Object.values(third)
    const thirdPrice = thirdItem[6]

    console.log(firstPrice, secondPrice, thirdPrice)
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
      </div>
      <h2>Basket: {price}</h2>
    </div>
  )
}

export default List
