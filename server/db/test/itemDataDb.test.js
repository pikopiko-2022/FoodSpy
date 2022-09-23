const knex = require('knex')
const config = require('../../db/knexfile').test
const testDb = knex(config)

const db = require('../../db/itemData')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('get a single items data from the database', () => {
  it('returns a single item', () => {
    return db.getItemData(1, testDb).then((item) => {
      expect(item[0]).toHaveProperty('store_id')
      expect(item[0]).toHaveProperty('item_id')
      expect(item[0]).toHaveProperty('itemPricesId')
      expect(item[0].name).toBe('PAKnSAVE')
    })
  })
})
