import nock from 'nock'

import {
  getAllItems,
  getItem,
  getItemData,
  updateItemPrice,
} from '../apiClient'

const allItems = [
  { id: 1, item_name: 'Milk', price: '3.8', location: 'Countdown' },
  { id: 2, item_name: 'Eggs', price: '4.2', location: 'PnS' },
  { id: 3, item_name: 'Bread', price: '5.0', location: 'New World' },
]

describe('updateItemPrice', () => {
  test('can update price of an item', () => {
    const responseData = allItems[0]
    const scope = nock('http://localhost')
      .patch('/api/v1/items/1')
      .send({ price: '5.0' })
      .reply(200, responseData)
    return updateItemPrice(1).then((res) => {
      console.log('gia moi', res)
      expect(res).toEqual(responseData)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getItemData', () => {
  test('can get data of one item', () => {
    const responseData = allItems[0]
    const scope = nock('http://localhost')
      .get('/api/v1/item-data/1')
      .reply(200, responseData)
    return getItemData(1).then((res) => {
      expect(res).toEqual(responseData)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getItem', () => {
  test('can get an item', () => {
    const responseData = allItems[1]
    const scope = nock('http://localhost')
      .get('/api/v1/items/2')
      .reply(200, responseData)

    return getItem(2).then((res) => {
      expect(res).toEqual(responseData)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getAllItems', () => {
  test('can get the list of all items', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/items/')
      .reply(200, allItems)

    return getAllItems().then((res) => {
      expect(res).toHaveLength(3)
      expect(res[0].item_name).toBe('Milk')
      expect(scope.isDone()).toBe(true)
    })
  })
})
