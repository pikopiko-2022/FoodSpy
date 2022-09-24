import nock from 'nock'

import { getAllItems, getItem } from '../apiClient'

const allItems = [
  {
    id: 1,
    item_name: 'Milk',
  },
  {
    id: 2,
    item_name: 'Eggs',
  },
  {
    id: 3,
    item_name: 'Bread',
  },
]

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

describe('getItem', () => {
  test('can get an item', () => {
    const responseData = allItems[0]
    const scope = nock('http://localhost')
      .get('/api/v1/items/1')
      .reply(200, responseData)

    return getItem(1).then((res) => {
      expect(res).toEqual(responseData)
      expect(scope.isDone()).toBe(true)
    })
  })
})
