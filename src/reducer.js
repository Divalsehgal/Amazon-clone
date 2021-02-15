export const intialState = {
  basket: [],
  user:null
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,user:action.user
      }
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      let id = action.id;
      const arr = [...state.basket];
      const filterArray = arr.filter((item, index) => {
        if (id !== item.id) return item;
      });

      return { ...state, basket: filterArray };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
