import Repository from './Repository'

const resource = '/user'

export default {
  getMe (token) {
    return Repository.get(`${resource}/me`)
  },
  create (payload) {
    return Repository.post(`${resource}/add`, payload)
  },
  login (payload) {
    return Repository.post(`${resource}/login`, payload)
  },
  logout () {
    return Repository.get(`${resource}/logout`)
  }
}
