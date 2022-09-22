import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// useDispatch, useSelector?

import styles from './Home.module.scss'

import { getItem } from '../apis/apiClient'

function Dropdown() {
  const [groceryItem, setGroceryItem] = useState('')
  const items = [{ value: 'Milk' }, { value: 'Eggs' }, { value: 'Bread' }]

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownInput}>
        <form>
          <b>What are you looking for?</b>
          <select id="myList" onChange="favTutorial()">
            <option> ---Select--- </option>
            <option> Milk </option>
            <option> Eggs </option>
            <option> Bread</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Dropdown
