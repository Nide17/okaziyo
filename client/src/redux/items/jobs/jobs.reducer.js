import { GET_JOBS, CREATE_JOB, CREATE_JOB_FAIL, DELETE_JOB, DELETE_JOB_FAIL, UPDATE_JOB, UPDATE_JOB_FAIL, JOBS_LOADING } from "./jobs.types";

const INITIAL_STATE = {
  allJobs: [],
  isLoading: true
};

const jobsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case GET_JOBS:
      return {
        ...state,
        isLoading: false,
        allJobs: action.payload
      };

    case CREATE_JOB:
      return {
        ...state,
        allJobs: [...state.allJobs, action.payload]
      };

    case CREATE_JOB_FAIL:
    case DELETE_JOB_FAIL:
    case UPDATE_JOB_FAIL:
      return {
        ...state,
        msg: "Failed!"
      };

    case UPDATE_JOB:
      return {
        ...state,
        allJobs: state.allJobs.map((job) => {

          if (job._id === action.payload.qId) {

            return {
              ...job,
              title: action.payload.title,
              description: action.payload.description,
              brand: action.payload.brand,
              price: action.payload.price
            }

          } else return job;
        })
      }

    case DELETE_JOB:
      return {
        ...state,
        allJobs: state.allJobs.filter(job => job._id !== action.payload)
      }

    case JOBS_LOADING:
      return {
        ...state,
        isLoading: true
      }


    default:
      return state;
  }
};

export default jobsReducer;