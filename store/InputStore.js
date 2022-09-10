export const state = () => ({
  inputValue: "fuck you bitch"
})

export const getters = {
  getValue(state) {
    console.log(state)
    console.log(state.inputValue)
    return state.inputValue
  }
}

export const mutations = {
  increment(state, value) {
    state.inputValue = value
  }
}

export const actions = {
  async fetchData({ state }) {
    // make request
    const res = { data: "lalala" };
    state.inputValue = res.data;
    return res.data;
  }
}