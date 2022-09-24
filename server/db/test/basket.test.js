const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/basket')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getAllItems', () => {
  it('returns an array of all items', () => {
    expect.assertions(3)
    return db.getAllItems(testDb).then((items) => {
      expect(items).toHaveLength(9)
      expect(items[0]).toHaveProperty('item_name')
      expect(items[0].item_name).toBe('Milk')
    })
  })
})
