const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/list')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getItems', () => {
  it('returns an array of item type', () => {
    expect.assertions(3)
    return db.getItems(testDb).then((items) => {
      expect(items).toHaveLength(3)
      expect(items[0]).toHaveProperty('item_name')
      expect(items[0].item_name).toBe('Milk')
    })
  })
})
