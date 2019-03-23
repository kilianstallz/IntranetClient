import Repository from './Repository'

const resource = '/shopping'

export default {
  createItem (payload) {
    Repository.post(`${resource}/item/create`, payload)
  },
  getItem (id) {
    Repository.get(`${resource}/item/${id}`)
  },
  getItemByCreator (id) {
    Repository.get(`${resource}/${id}`)
  },
  editItem (id) {
    Repository.patch(`${resource}/item/${id}`)
  },
  deleteItem (id) {
    Repository.delete(`${resource}/item/${id}/delete`)
  },
  getAllItems () {
    Repository.get(`${resource}/`)
  }
}
