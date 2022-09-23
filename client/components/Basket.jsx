import React from 'react'
import { useSelector } from 'react-redux'

import styles from '../styles/List.module.scss'

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
      setBasket(basketCopy)
      return
    }
    setBasket({ ...basket, [itemId]: { name: name, quantity: quantity - 1 } })
  }

  function handlePlusClick(itemId, name, quantity) {
    // if (quantity + 1 > 0) {
    //   const basketCopy = { ...basket }
    //   delete basketCopy[itemId]
    //   setBasket(basketCopy)
    //   return
    // }
    setBasket({ ...basket, [itemId]: { name: name, quantity: quantity + 1 } })
  }

  return (
    <div>
      {Object.keys(basket).map((itemId) => {
        return (
          <>
            <p>{basket[itemId].name}</p>
            <p className={styles.smallText} key={basket[itemId].name}>
              Item count: {basket[itemId].quantity} {''}
              {''}
              <button
                className={styles.minus}
                onClick={() => {
                  handleMinusClick(
                    itemId,
                    basket[itemId].name,
                    basket[itemId].quantity
                  )
                }}
              >
                -
              </button>{' '}
              {''}
              <button
                className={styles.plus}
                onClick={() => {
                  handlePlusClick(
                    itemId,
                    basket[itemId].name,
                    basket[itemId].quantity
                  )
                }}
              >
                +
              </button>
            </p>
          </>
        )
      })}
      <p>
        {bestPrice !== 0 && (
          <>
            <p>Cheapest store:</p>
            <p>{bestLocation}</p>
            <p>
              <b>Total: $ {Number(bestPrice).toFixed(2)}</b>
            </p>
          </>
        )}
      </p>
    </div>
  )
}

export default Basket
