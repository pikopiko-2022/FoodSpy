import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {
  const items = useSelector((state) => {
    return state.price
  })

  let sum = 0
  let total = getTotal(sum)

  function getTotal(num) {
    if (items.length !== 0) {
      const storeOrder = items.sort((a, b) => a.store_id - b.store_id)

      console.log(storeOrder)

      const first = storeOrder[0]
      const firstItem = Object.values(first)
      const firstStorePrice = firstItem[6]
      const firstStoreName = firstItem[8]
      const firstStoreId = firstItem[4]

      const second = storeOrder[1]
      const secondItem = Object.values(second)
      const secondStorePrice = secondItem[6]
      const secondStoreName = secondItem[8]
      const secondStoreId = secondItem[4]

      const third = storeOrder[2]
      const thirdItem = Object.values(third)
      const thirdStorePrice = thirdItem[6]
      const thirdStoreName = thirdItem[8]
      const thirdStoreId = thirdItem[4]

      let price = num
      price += firstStorePrice
      let total = price

      console.log(firstStorePrice, firstStoreId, firstStoreName)
      console.log(secondStorePrice, secondStoreId, secondStoreName)
      console.log(thirdStorePrice, thirdStoreId, thirdStoreName)

      return total
    }
  }

  return (
    <div>
      <h2>{total}</h2>
    </div>
  )
}

export default Basket
