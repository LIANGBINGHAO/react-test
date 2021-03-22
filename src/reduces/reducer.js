const tiger = 10000;
const INITIAL_STATE = {
  tiger: 10000,
  error: "出错"
};

//这是action
// const increase = {
//   type: "涨工资"
// };
// const decrease = {
//   type: "扣工资"
// };
//这是reducer
const reducer = (state = INITIAL_STATE, action) => {
  console.log(state, INITIAL_STATE, "reduce");
  switch (action.type) {
    case "涨工资":
      return {
        ...state,
        tiger: (state.tiger += 100),
        error: "出错3"
      };
    case "扣工资":
      return {
        ...state,
        tiger: (state.tiger -= 100)
      };
    default:
      return INITIAL_STATE;
  }
};
export default reducer;
