const request = require('supertest')
const server = require('../../server')

const { getItemsByName } = require('../../db/search')
jest.mock('../../db/search')

const getItemsByNameMockData = [
  {
    id: 1,
    name: 'Milk',
    description: '2L lite blue milk',
    image_url: '/images/milk.jpg',
  },
  {
    id: 2,
    name: 'Bread',
    description: 'A loaf of white toast bread',
    image_url: '/images/bread.jpg',
  },
]

describe('GET /api/v1/search/', () => {
  it('should return status 200 and item from database on success', () => {
    expect.assertions(2)
    getItemsByName.mockReturnValue(Promise.resolve(getItemsByNameMockData))
    return request(server)
      .get('/api/v1/search/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getItemsByNameMockData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message on failure', () => {
    expect.assertions(2)
    getItemsByName.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/search/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
