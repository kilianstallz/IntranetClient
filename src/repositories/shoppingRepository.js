import Repository from './Repository'

const resource = '/shopping'

export default {
  createItem (payload) {
    return Repository.post(`${resource}/item/create`, payload)
  },
  getItem (id) {
    return Repository.get(`${resource}/item/${id}`)
  },
  getItemByCreator (id) {
    return Repository.get(`${resource}/${id}`)
  },
  editItem (id) {
    return Repository.patch(`${resource}/item/${id}`)
  },
  deleteItem (id) {
    return Repository.delete(`${resource}/item/${id}/delete`)
  },
  getAllItems () {
    return Repository.get(`${resource}/`)
  }
}
