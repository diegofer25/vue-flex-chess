export default {
  setTurn ({ state, commit }) {
    const color = state.turn === 'white' ? 'black' : 'white'
    commit('SET_TURN', color)
  }
}
