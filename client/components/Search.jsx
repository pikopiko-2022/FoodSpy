import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getItemByName } from '../apis/search'
import { getList } from '../actions/list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
  const [form, setForm] = useState(initialData)

  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getList())
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const item = list.find((el) => el.item_name == titleCase(form.search))
    getItemByName(item.item_name)
    navigate(`/item/${item.id}`)
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            // placeholder={faSearch}
            placeholder="Search"
            id="search"
            value={form.search}
            name="search"
            type="text"
            onChange={handleChange}
            className="search-form"
          />
          <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
        </label>
        {/* <button className="search-item">Search</button> */}
      </form>
    </div>
  )
}

export default Search
