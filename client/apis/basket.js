import request from 'superagent'

const rootUrl = '/api/v1'

//same function exists in apiClient - just use that one in stead of duplicating
export function getAllItems() {
  return request.get(rootUrl + '/basket').then((res) => {
    return res.body
  })
}
