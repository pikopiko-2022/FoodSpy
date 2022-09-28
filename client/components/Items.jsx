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
    navigate(`/item/${item.id}`)
  }

  function handleSelect(e, itemId) {
    const item = list.find((el) => el.id == itemId)
    if (e.keyCode == 13) {
      navigate(`/item/${item.id}`)
    }
  }

  return (
    <>
      <h2 className="searchTitle">Sorry, no results found</h2>
      <div>
        <Link className="createListResults" to="/list">
          Create shopping list
        </Link>
      </div>
      <p className="h3-text">
        Search again or browse the items below to check prices
      </p>
      <div className="searchContainer">
        {list.map((item) => {
          return (
            <div key={item.id} className="searchResultContainer">
              <div
                onClick={() => handleImageClick(item.id)}
                onKeyDown={(e) => handleSelect(e, item.id)}
                data-testid="imageKeyDown"
                role="button"
                value={item.id}
                tabIndex="0"
                id="image"
                name="image"
              >
                <img
                  className="itemImage"
                  src={item.image_url}
                  alt={item.item_name}
                />
              </div>
              <div className="searchResultTextContainer">
                <h3 className="searchResultHeading">{item.item_name}</h3>
                <p className="searchResultDescription">{item.description}</p>
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
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Items
