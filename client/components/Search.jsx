import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getItemByName } from '../apis/search'
import { getList } from '../actions/list'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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
  const [item, setItem] = useState({})
  const list = useSelector((state) => {
    return state.list
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getList())
  }, [item])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const search = list.find((el) => el.item_name == titleCase(form.search))
    if (typeof search === 'object' && search !== null) {
      setItem(search)
      getItemByName(search.item_name)
      setForm(initialData)
      navigate(`/item/${search.id}`)
    } else {
      setForm(initialData)
      navigate(`/items`)
    }
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            id="search"
            placeholder="Search"
            value={form.search}
            name="search"
            type="text"
            onChange={handleChange}
            className="searchForm"
          />
          <button className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </label>
      </form>
    </div>
  )
}

export default Search
