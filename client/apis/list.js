import request from 'superagent'

const rootUrl = '/api/v1'

export function getListContent() {
  return request.get(rootUrl + '/list').then((res) => {
    return res.body
  })
}

export function getPriceContent() {
  return request.get(rootUrl + '/list').then((res) => {
    return res.body
  })
}
