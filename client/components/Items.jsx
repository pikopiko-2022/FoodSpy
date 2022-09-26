import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getList } from '../actions/list'

function Items() {
  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getList())
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    navigate(`/item/${event.target.value}`)
  }

  return (
    <>
      <h2 className="item-title">Sorry, no results found</h2>
      <h3 className="h3-heading">Click on item to compare prices</h3>
      <div className="overallContainer">
        {list.map((item) => {
          return (
            <div key={item.id} className="foodContainer">
              <img
                className="listImage"
                src={item.image_url}
                alt={item.item_name}
              />
              <h3 className="listHeading">{item.item_name}</h3>
              <button id="go" value={item.id} name="go" onClick={handleClick}>
                Go
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Items
