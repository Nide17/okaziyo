import { GET_ITEMS, CREATE_ITEM, CREATE_ITEM_FAIL, DELETE_ITEM, DELETE_ITEM_FAIL, UPDATE_ITEM, UPDATE_ITEM_FAIL, ITEMS_LOADING } from "./items.types";

const INITIAL_STATE = {
  allItems: [],
  isLoading: true
};

const itemsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case GET_ITEMS:
      return {
        ...state,
        isLoading: false,
        allItems: action.payload
      };

    case CREATE_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, action.payload]
      };

    case CREATE_ITEM_FAIL:
    case DELETE_ITEM_FAIL:
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        msg: "Failed!"
      };

    case UPDATE_ITEM:
      return {
        ...state,
        allItems: state.allItems.map((item) => {

          if (item._id === action.payload.qId) {

            return {
              ...item,
              title: action.payload.title,
              description: action.payload.description,
              brand: action.payload.brand,
              price: action.payload.price
            }

          } else return item;
        })
      }

    case DELETE_ITEM:
      return {
        ...state,
        allItems: state.allItems.filter(item => item._id !== action.payload)
      }

    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true
      }


    default:
      return state;
  }
};

export default itemsReducer;