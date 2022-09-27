import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

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

  const handleImageClick = (itemId) => {
    const item = list.find((el) => el.id == itemId)
    console.log(item)
    navigate(`/item/${item.id}`)
  }

  function handleSelect(e, itemId) {
    const item = list.find((el) => el.id == itemId)
    console.log(item)
    if (e.keyCode == 13) {
      navigate(`/item/${item.id}`)
    }
  }

  return (
    <>
      <h2 className="item-title">Sorry, no results found</h2>
      <div>
        <Link className="createList" to="/list">
          Create shopping list
        </Link>
      </div>
      <h3 className="h3-heading">Click on item to update or compare prices</h3>
      <div className="overallContainer">
        {list.map((item) => {
          return (
            <div key={item.id} className="foodContainer">
              <div
                onClick={() => handleImageClick(item.id)}
                onKeyDown={(e) => handleSelect(e, item.id)}
                role="button"
                value={item.id}
                tabIndex="0"
                id="image"
                name="image"
              >
                <img
                  className="listImage"
                  src={item.image_url}
                  alt={item.item_name}
                />
              </div>
              <h3 className="listHeading">{item.item_name}</h3>
              <button
                id="prices"
                value={item.id}
                name="prices"
                onClick={handleClick}
                className="checkPricesButton"
              >
                Check Prices
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Items
