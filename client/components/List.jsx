import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'

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
      <div className="itemContainer">
        {list.map((item) => {
          return (
            <div key={item.name}>
              {/* <img src={item.image} alt={item.name} /> */}
              <h3>{item.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
