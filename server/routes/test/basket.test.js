const request = require('supertest')
const server = require('../../server')

const { getAllItems } = require('../../db/basket')
jest.mock('../../db/basket')

const getAllItemsMockData = [
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

describe('GET /api/v1/basket/', () => {
  it('should return status 200 and all items from database on success', () => {
    expect.assertions(2)
    getAllItems.mockReturnValue(Promise.resolve(getAllItemsMockData))
    return request(server)
      .get('/api/v1/basket/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getAllItemsMockData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message on failure', () => {
    expect.assertions(2)
    getAllItems.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/basket/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
