import React from 'react'
import { useSelector } from 'react-redux'

function Basket({ basket, setBasket }) {
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
          complexData.price * basket[itemId].quantity
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

  function handleMinusClick(itemId, name, quantity) {
    if (quantity - 1 == 0) {
      const basketCopy = { ...basket }
      delete basketCopy[itemId]
      console.log(basketCopy)
      setBasket(basketCopy)
      return
    }
    setBasket({ ...basket, [itemId]: { name: name, quantity: quantity - 1 } })
  }

  return (
    <div>
      {Object.keys(basket).map((itemId) => {
        return (
          <p key={basket[itemId].name}>
            {basket[itemId].name} {basket[itemId].quantity}
            <button
              onClick={() => {
                handleMinusClick(
                  itemId,
                  basket[itemId].name,
                  basket[itemId].quantity
                )
              }}
            >
              minus
            </button>
          </p>
        )
      })}
      <h2>
        {bestPrice !== 0 && (
          <>
            {bestPrice} {bestLocation}
          </>
        )}
      </h2>
    </div>
  )
}

export default Basket
