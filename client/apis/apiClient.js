import request from 'superagent'

const rootUrl = '/api/v1'

export function getItemData(id) {
  return request.get(rootUrl + '/item-data/' + id).then((res) => {
    return res.body
  })
}

export function getItem(id) {
  return request.get(rootUrl + '/items/' + id).then((res) => {
    return res.body
  })
}

export function updateItemPrice(id, price) {
  console.log('id', id)
  // update should be patch but we currently have it was post
  // the path on our serverside
  return request
    .post(rootUrl + '/items/' + id)
    .send({ price: price })
    .then((res) => {
      return res.body
    })
}

export const getAllItems = () => {
  return request.get(rootUrl + '/items/').then((res) => res.body)
}
