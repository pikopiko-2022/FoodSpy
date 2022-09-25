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

describe('getItems', () => {
  it('returns the item array', () => {
    expect.assertions(3)
    return db.getItems(testDb).then((item) => {
      expect(item).toHaveLength(10)
      expect(item[0]).toHaveProperty('item_name')
      expect(item[0].item_name).toBe('Milk')
    })
  })
})

describe('get single Item', () => {
  it('returns a single item', () => {
    expect.assertions(2)
    return db.getItem(1, testDb).then((item) => {
      expect(item).toHaveProperty('description')
      expect(item.description).toBe('2L lite blue milk')
    })
  })
})

//ask for help to see if update is actually getting tested
describe('update Item', () => {
  it('returns updated item', () => {
    const fakeData = {
      price: 3,
    }
    return db
      .updatePrice(1, fakeData.price, testDb)
      .then((item) => {
        console.log(item)
        return testDb('itemPrices').select()
      })
      .then((itemPrices) => {
        console.log(itemPrices[1])
        expect(itemPrices[1].item_id).toBe(1)
        expect(itemPrices[1].price).toBe(3.84)
      })
  })
})
