import React, { useState, useEffect } from 'react'
import { getAllItems } from '../apis/apiClient'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  const navigate = useNavigate()
  const { item_id } = selectedItem

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

  console.log('current items', selectedItem)

  return (
    // Choose city just for demonstration purposes at this stage, as it would be too much data in the database to have multiple cities
    <>
      <div className="landing-container">
        <div className="dropdowns">
          <h3 className="landing-first-dropdown">1. Where are you?</h3>
          <form>
            <div>
              <select className="form-select">
                <option value=""> ---Choose city--- </option>
                <option value="auckland">Auckland</option>
                <option value="tauranga">Tauranga</option>
                <option value="rotorua">Rotorua</option>
                <option value="taupo">Taupo</option>
                <option value="hastings">Hastings</option>
                <option value="napier">Napier</option>
                <option value="whanganui">Whanganui</option>
                <option value="palmerston north">Palmerston North</option>
                <option value="wellington">Wellington</option>
                <option value="nelson">Nelson</option>
                <option value="christchurch">Christchurch</option>
                <option value="dunedin">Dunedin</option>
                <option value="queenstown">Queenstown</option>
              </select>
            </div>
          </form>

          <h3 className="landing-second-dropdown">
            2. What are you looking for?
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <select
                className="form-select"
                // id="item_id"
                name="item_id"
                value={item_id}
                onChange={handleChange}
              >
                <option value=""> --- Choose item --- </option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.item_name}
                  </option>
                ))}
              </select>
            </div>
            <div style={{'marginTop': '60px'}}>
              {selectedItem.item_id && (
                
                  <button className="bargainSubmitButton" onClick={handleSubmit}>
                    Show me the bargains!
                  </button>
                
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
