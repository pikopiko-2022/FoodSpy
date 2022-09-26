import nock from 'nock'
import { getItemByName } from '../search'

const getItemByNametMockData = [
  {
    id: 1,
    item_name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('GET /api/v1/search', () => {
  it('get item by item_name', async () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .get('/api/v1/search')
      .reply(200, getItemByNametMockData)

    const itemName = await getItemByName()
    expect(itemName).toEqual(getItemByNametMockData)
    expect(itemName).toHaveLength(1)
    scope.done()
  })
})
