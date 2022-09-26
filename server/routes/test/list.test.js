const request = require('supertest')
const server = require('../../server')

const { getItems } = require('../../db/item')
jest.mock('../../db/item')

const getItemsMockData = [
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

describe('GET /api/v1/list/', () => {
  it('should return status 200 and items from item table on success', () => {
    expect.assertions(2)
    getItems.mockReturnValue(Promise.resolve(getItemsMockData))
    return request(server)
      .get('/api/v1/list/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getItemsMockData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message on failure', () => {
    expect.assertions(2)
    getItems.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/list/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
      })
  })
})
