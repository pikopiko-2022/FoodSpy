import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllItems() {
  return request.get(rootUrl + '/basket').then((res) => {
    return res.body
  })
}
