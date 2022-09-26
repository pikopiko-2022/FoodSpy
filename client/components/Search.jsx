import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getList } from '../actions/list'
import { getItemByName } from '../apis/search'

const initialData = {
  search: '',
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

function Search() {
  const list = useSelector((state) => {
    return state.list
  })
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [form, setForm] = useState(initialData)

  useEffect(() => {
    dispatch(getList())
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  let item = {}

  const handleSubmit = (event) => {
    event.preventDefault()
    item = list.find((el) => el.item_name == titleCase(form.search))
    getItemByName(item.item_name)
      .then((newSearch) => {
        setSearch(newSearch)
        setForm(initialData)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const result = search[0]
  const itemName = { result }
  console.log(itemName)

  return (
    <div>
      <h2>Search for item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            id="search"
            value={form.search}
            name="search"
            type="text"
            onChange={handleChange}
          />
        </label>
        <button>Search</button>
      </form>
      <div>
        {Object.keys(result || {}).map((itemId) => {
          return (
            <div key={itemId}>
              <p>{result[itemId].item_name}</p>
              <p>Description: {result[itemId].description}</p>
            </div>
          )
        })}
      </div>
      {/* <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="listImage"
                src={item.image_url}
                alt={item.item_name}
              />
              <h3>{item.item_name}</h3>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default Search
