import request from 'superagent'

const rootUrl = '/api/v1'

export function getItemByName(itemName) {
  return request
    .get(rootUrl + '/search')
    .query({ name: itemName })
    .then((res) => {
      return res.body
    })
}
