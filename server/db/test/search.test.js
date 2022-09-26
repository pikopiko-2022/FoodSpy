const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/search')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getItemsByName', () => {
  it('returns items by itemName', () => {
    const fakeData = {
      name: 'Milk',
    }
    expect.assertions(3)
    return db.getItemsByName(fakeData.name, testDb).then((items) => {
      expect(items).toHaveLength(1)
      expect(items[0]).toHaveProperty('item_name')
      expect(items[0].item_name).toBe('Milk')
    })
  })
})
