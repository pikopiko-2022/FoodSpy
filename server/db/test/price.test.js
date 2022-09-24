const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/price')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getDataByItemId', () => {
  it('returns an array of items by itemId', () => {
    expect.assertions(3)
    return db.getDataByItemId(1, testDb).then((items) => {
      expect(items).toHaveLength(3)
      expect(items[0]).toHaveProperty('item_name')
      expect(items[0].item_name).toBe('Milk')
    })
  })
})
