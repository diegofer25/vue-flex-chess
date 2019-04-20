import game from './game'

export default {
  modules: {
    game: {
      namespaced: true,
      ...game
    }
  }
}
