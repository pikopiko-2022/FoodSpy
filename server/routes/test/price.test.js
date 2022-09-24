const request = require('supertest')
const server = require('../../server')

const { getDataByItemId } = require('../../db/price')
jest.mock('../../db/price')

const getByItemIDMockData = [
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

describe('GET /api/v1/price/', () => {
  it('should return status 200 and all items from database on success', () => {
    expect.assertions(2)
    getDataByItemId.mockReturnValue(Promise.resolve(getByItemIDMockData))
    return request(server)
      .get('/api/v1/price/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getByItemIDMockData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message on failure', () => {
    expect.assertions(2)
    getDataByItemId.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/price/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
