import request from 'superagent'

const rootUrl = '/api/v1'

export function getItem() {
  return request.get(rootUrl + '/item').then((res) => {
    return res.body
  })
}
