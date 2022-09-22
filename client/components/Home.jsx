import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getItem } from '../apis/apiClient'

import styles from './Home.module.scss'
import Item from './Item'

function Home() {
  const [item, setItem] = useState('')

  let { id } = useParams()

  useEffect(() => {
    getItem(id)
      .then(() => {
        setItem()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  


    // const [city, setCity] = useState()
    // useState

    // function to handleClick
    // function to handle change?
    // const handleClick(e) {
    //   e.target.value
    // }

    // const handleSubmit(e) {
    //   e.preventDefault()
    // }
    // map over the items

    return (
      <>
        {/* Drop down inserted to this page */}
        <div>
          <h1>A place to find the bare essentials on a budget </h1>
        </div>

        <div className={styles.Home}>
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

        <div>
          <form>
            <b> What are you looking for? </b>
            <select id="myList" onChange="foodItem()">
              <option> ---Select--- </option>
              <option> Milk</option>
              <option> Eggs </option>
              <option> Bread</option>
              <option>Shopping List</option>
            </select>
          </form>
        </div>
        <div>
          <Link to="./Item">
            <button className="button">Show me the bargains!</button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
