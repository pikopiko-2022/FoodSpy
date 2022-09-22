import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Map from './Map'
import { getItemData, getItem } from '../apis/apiClient'

function Item() {
  const [item, setItem] = useState('')
  const [itemData, setItemData] = useState([])
  let { id } = useParams()
  console.log('testing this')
  useEffect(() => {
    getItemData(id)
      .then((d) => {
        console.log(d)
        setItemData(d)
      })
      .catch((err) => {
        console.log(err)
      })
    getItem(id)
      .then((d) => {
        setItem(d)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {/* <h1>Items</h1> */}
      {item && <h1>Prices for {item.name}</h1>}
      {itemData && (
        <ul>
          {itemData.map((item) => (
            <li key={item.id}>
              {item.location} - {item.price}
            </li>
          ))}
        </ul>
      )}
      <Map />
    </>
  )
}

export default Item
