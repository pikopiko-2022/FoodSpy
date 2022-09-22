import React, { useState, useEffect } from 'react'
import { getAllItems } from '../apis/apiClient'
import { useNavigate } from 'react-router-dom'

// import Item from './Item'

export default function Home() {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState([])

  const navigate = useNavigate()
  const { item_id, name } = selectedItem

  useEffect(() => {
    getAllItems()
      .then((item) => {
        setItems(item)
      })
      .catch((err) => {
        throw new Error(err.message)
      })
  }, [])

  function handleChange(e) {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/item/${item_id}`)
  }

  return (
    <>
      <h3 className="what">Where are you?</h3>
      <form className>
        <div>
          <label htmlFor="place"></label>
          <select id="myList" onChange="favTutorial()">
            <option> ---Choose city--- </option>
            <option> Auckland </option>
            <option> Napier </option>
            <option> Wellington </option>
            <option> Christchurch</option>
          </select>
        </div>
      </form>

      <h3 className="what">What are you looking for?</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item_id"></label>
          <select
            id="item_id"
            name="item_id"
            value={item_id}
            onChange={handleChange}
          >
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className="bargainsButton" onClick={handleSubmit}>
            Show me the bargains!
          </button>
        </div>
      </form>
    </>
  )
}
