const request = require('supertest')
const server = require('../../server')
const db = require('../../db/item')
const { getItems, updatePrice, getItem } = require('../../db/item')

require('@testing-library/jest-dom')

jest.mock('../../db/item')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/items', () => {
  it('gets all items from the database', () => {
    expect.assertions(2)
    db.getItems.mockReturnValue(
      Promise.resolve([{ name: 'Chocolate' }, { name: 'Wine' }])
    )
    return request(server)
      .get('/api/v1/items')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].name).toBe('Wine')
      })
  })
  it('returns status 500 and consoles error', () => {
    expect.assertions(2)
    getItems.mockImplementation(() => Promise.reject(new Error('Server error')))
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/items')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Server error')
      })
  })
})

describe('GET /api/v1/item', () => {
  it('gets single items from the database', () => {
    expect.assertions(2)
    db.getItem.mockReturnValue(
      Promise.resolve([{ name: 'bob' }, { name: 'steve' }])
    )
    return request(server)
      .get('/api/v1/items/1')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].name).toBe('steve')
      })
  })
  it('returns status 500 and consoles error', () => {
    expect.assertions(2)
    getItem.mockImplementation(() => Promise.reject(new Error('Server error')))
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/item/1')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Server error')
      })
  })
})

describe('POST /api/v1/items', () => {
  it('return updated item information', () => {
    expect.assertions(1)
    updatePrice.mockReturnValue(Promise.resolve())
    return request(server)
      .post('/api/v1/items/1')
      .then((res) => {
        expect(res.status).toBe(204)
      })
  })
  it('returns status 500 and consoles error', () => {
    // expect.assertions(2)
    updatePrice.mockImplementation(() =>
      Promise.reject(new Error('Server error'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .post('/api/v1/items/2')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Server error')
      })
  })
})
