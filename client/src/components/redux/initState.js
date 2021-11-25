const initState = {
  // states
  user: null,
  content: [],
  serials: [],
  season:[],
  words: [],
  job: [],
  modalState: null
}

// const getInitState = () => {
//   const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
//   return stateFromLS ? stateFromLS : initState
// }
// export default getInitState

// export default initState

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("redux"));
  return stateFromLS ? stateFromLS : initState;
};
export default getInitState;

