import nock from 'nock'
import { getAllItems } from '../basket'

const getAllItemsMockData = [
  {
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('GET /api/v1/basket', () => {
  it('gets all item data', async () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .get('/api/v1/basket')
      .reply(200, getAllItemsMockData)

    const allItems = await getAllItems()
    expect(allItems).toEqual(getAllItemsMockData)
    expect(allItems).toHaveLength(1)
    scope.done()
  })
})
