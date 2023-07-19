export const defaultProduct = {count: 0, discount: 0, name: '', price: 0}

export function productReducer(state, action) {
  switch (action.type) {
    case 'PLUS_COUNT': {
      let newState = { ...state };
      newState.count = state.count + 1;
      if (newState.count >= 5) {newState.discount = 20;}
      return newState; 
    }
    case 'MINUS_COUNT': {
      let newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 5) {newState.discount = 0;}
      if (newState.count < 0) {newState.count = 0;}
       // return newState;
      return newState;
    }
    case 'SET_NAME': {return {...state, name: action.name }}
    case 'SET_PRICE': {return {...state, price: action.price }}
    default: throw Error('productReducer - unknown action:' + action.type);
  }
}
