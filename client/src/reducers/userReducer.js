export const initState = null;
export const reducer = (state = initState, action) => {
  if (action.type === "USER") {
    return action.payload;
  }
  if (action.type === "CLEAR") {
    return null;
  }
  return state;
};
