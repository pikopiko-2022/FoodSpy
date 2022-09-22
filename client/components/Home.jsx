import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import styles from './Home.module.scss'

import { fetchHomeContent } from '../actions/home'
// how the bloody hell do you get an image from server-side rendered?
// let image = require('../../server/public/images/Piggy.jpg')
function Home() {
  // const dispatch = useDispatch()
  // const homeContent = useSelector((state) => state.home)

  // useEffect(() => dispatch(fetchHomeContent), [])

  return (
    <div>
      <div className={styles.Home}>
        {/* <img src={homeContent.imageUrl} alt="homePageImage"></img> */}

        <div>
          <h1>A place to find the bare essentials on a budget </h1>
        </div>
        <div>
          <form className={styles.dropdown}>
            <b> Where are you? </b>
            <select id="myList" onChange="favTutorial()">
              <option> ---Choose city--- </option>
              <option> Auckland </option>
              <option> Napier </option>
              <option> Wellington </option>
              <option> Christchurch</option>
            </select>
          </form>
        </div>
      </div>

        <div className={styles.dropdownContainer}>
          <Dropdown placeHolder="Select..." />
        </div>

      <Link to="./Item">
        <button className="button">Show me the bargains!</button>
      </Link>
    </div>
  )
}

export default Home
