import request from 'superagent'

const rootUrl = '/api/v1'

export function getPriceContent(id) {
  return request
    .get(rootUrl + '/price')
    .query({ id: id })
    .then((res) => {
      return res.body
    })
}
