import { game } from './modules'

export default {
  modules: {
    game: {
      namespaced: true,
      ...game
    }
  }
}
