const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/item')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getItem', () => {
  it('returns the item array', () => {
    return db.getItems(testDb).then((item) => {
      expect(item).toHaveLength(3)
      expect(item[0]).toHaveProperty('name')
      expect(item[0].name).toBe('Milk')
    })
  })
})
