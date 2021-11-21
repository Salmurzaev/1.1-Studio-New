const initState = {
  // states
  users: null,
  films: [],
  serials: [],
  words: []
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
  return stateFromLS ? stateFromLS : initState
}
export default getInitState