import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import styles from './List.module.scss'

const initialData = 0

function List() {
  const [basket, setBasket] = useState(initialData)

  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [])

  function addToBasket(id) {
    useEffect(() => {
      dispatch(getPrice(id))
    })
  }

  return (
    <div>
      <h1>Choose grocery items:</h1>
      <div className={styles.container}>
        {list.map((item) => {
          return (
            <div key={item.name} className={styles.foodContainer} role="button">
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
      <h2>Basket: </h2>
    </div>
  )
}

export default List
