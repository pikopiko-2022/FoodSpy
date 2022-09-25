const request = require('supertest')
const server = require('../../server')

const { getItemData } = require('../../db/itemData')
jest.mock('../../db/itemData')

const getItemMockData = [
  {
    id: 1,
    name: 'Milk',
    description: '2L lite blue milk',
    image_url: '/images/milk.jpg',
    location: 'PAKnSAVE Mt Albert',
  },
  {
    id: 2,
    name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
    location: 'Countdown Grey Lynn',
  },
]

describe('GET /api/v1/item-data/:id/', () => {
  it('should return status 200 and all items from database on success', () => {
    expect.assertions(2)
    getItemData.mockReturnValue(Promise.resolve(getItemMockData))
    return request(server)
      .get('/api/v1/item-data/:id/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getItemMockData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message on failure', () => {
    expect.assertions(2)
    getItemData.mockImplementation(() =>
      Promise.reject(new Error('Server error'))
    )
    return request(server)
      .get('/api/v1/item-data/:id/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
      })
  })
})
