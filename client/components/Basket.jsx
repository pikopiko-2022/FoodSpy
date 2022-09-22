import React from 'react'
import { useSelector } from 'react-redux'

function Basket({ basket }) {
  const allItems = useSelector((state) => {
    return state.basket
  })

  const runningTotal = {}
  allItems.forEach((itemData) => {
    runningTotal[itemData.location] = 0
  })

  Object.keys(basket).forEach((itemId) => {
    allItems.forEach((complexData) => {
      if (complexData.item_id == itemId) {
        runningTotal[complexData.location] =
          runningTotal[complexData.location] +
          complexData.price * basket[itemId]
      }
    })
  })

  let bestLocation = ''
  let bestPrice = 0
  Object.keys(runningTotal).forEach((location) => {
    if (bestPrice == 0 || runningTotal[location] < bestPrice) {
      bestLocation = location
      bestPrice = runningTotal[location]
    }
  })

  return (
    <div>
      <h2>
        {bestPrice} {bestLocation}
      </h2>
    </div>
  )
}

export default Basket
