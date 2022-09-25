import nock from 'nock'
import { getListContent } from '../list'

const getListMockData = [
  {
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('GET /api/v1/list', () => {
  it('gets list of item data', async () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .get('/api/v1/list')
      .reply(200, getListMockData)

    const list = await getListContent()
    expect(list).toEqual(getListMockData)
    expect(list).toHaveLength(1)
    scope.done()
  })
})
