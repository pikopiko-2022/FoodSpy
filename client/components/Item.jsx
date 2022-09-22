import React, { useState } from 'react'
import Map from './Map'
import { getItem } from '../../apiClient'


function Item() {
  const [itemData, setItemData] = useState([])
  getItem().then((d) => {
    console.log(d)
    setItemData(d)
  })

  return (
    <>
      <h1>Items</h1>
      {itemData.map((item) => {
        return ()
      })}
      <Map />
    </>
  )
}

export default Item
