import request from 'superagent'

const rootUrl = '/api/v1'

export function getHomeContent() {
  return request.get(rootUrl + '/home').then((res) => {
    return res.body
  })
}
