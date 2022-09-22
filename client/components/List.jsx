import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import styles from './List.module.scss'

function List() {
  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <div>
      <h1>Choose grocery items:</h1>
      <div className={styles.container}>
        {list.map((item) => {
          return (
            <div key={item.name} className={styles.foodContainer}>
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
    </div>
  )
}

export default List
