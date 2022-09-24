import nock from 'nock'
import { getPriceContent } from '../price'

const priceContentMockData = [
  {
    id: 1,
    item_name: 'Bread',
    location: 'Countdown Grey Lynn',
    price: 1.15,
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('GET /api/v1/price', () => {
  it('get price content by itemId', async () => {
    expect.assertions(2)
    const scope = nock('http://localhost')
      .get('/api/v1/price')
      .reply(200, priceContentMockData)

    const priceData = await getPriceContent()
    expect(priceData).toEqual(priceContentMockData)
    expect(priceData).toHaveLength(1)
    scope.done()
  })
})
