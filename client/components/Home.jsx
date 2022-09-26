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
                name="item_id"
                value={item_id}
                onChange={handleChange}
                data-testid="select"
              >
                <option value=""> --- Choose item --- </option>
                {items.map((item) => (
                  <option
                    data-testid="select-option"
                    key={item.id}
                    value={item.id}
                  >
                    {item.item_name}
                  </option>
                ))}
              </select>
            </div>

            {selectedItem.item_id && (
              <div>
                <button
                  className="bargainSubmitButton"
                  onClick={handleSubmit}
                  data-testid="submit"
                >
                  Show me the bargains!
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
