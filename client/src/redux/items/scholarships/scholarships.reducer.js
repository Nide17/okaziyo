import { GET_SCHOLARSHIPS, CREATE_SCHOLARSHIP, CREATE_SCHOLARSHIP_FAIL, DELETE_SCHOLARSHIP, DELETE_SCHOLARSHIP_FAIL, UPDATE_SCHOLARSHIP, UPDATE_SCHOLARSHIP_FAIL, SCHOLARSHIPS_LOADING } from "./scholarships.types";

const INITIAL_STATE = {
  allScholarships: [],
  isLoading: true
};

const scholarshipsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case GET_SCHOLARSHIPS:
      return {
        ...state,
        isLoading: false,
        allScholarships: action.payload
      };

    case CREATE_SCHOLARSHIP:
      return {
        ...state,
        allScholarships: [...state.allScholarships, action.payload]
      };

    case CREATE_SCHOLARSHIP_FAIL:
    case DELETE_SCHOLARSHIP_FAIL:
    case UPDATE_SCHOLARSHIP_FAIL:
      return {
        ...state,
        msg: "Failed!"
      };

    case UPDATE_SCHOLARSHIP:
      return {
        ...state,
        allScholarships: state.allScholarships.map((scholarship) => {

          if (scholarship._id === action.payload.qId) {

            return {
              ...scholarship,
              title: action.payload.title,
              description: action.payload.description,
              brand: action.payload.brand,
              price: action.payload.price
            }

          } else return scholarship;
        })
      }

    case DELETE_SCHOLARSHIP:
      return {
        ...state,
        allScholarships: state.allScholarships.filter(scholarship => scholarship._id !== action.payload)
      }

    case SCHOLARSHIPS_LOADING:
      return {
        ...state,
        isLoading: true
      }


    default:
      return state;
  }
};

export default scholarshipsReducer;