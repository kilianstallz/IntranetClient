import AuthRepository from './authRepository'
import ShoppingRepository from './shoppingRepository'

const repositories = {
  auth: AuthRepository,
  shopping: ShoppingRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
