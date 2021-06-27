import axios from 'axios';
import { returnErrors } from '../../error/error.actions'
import {GET_JOBS, CREATE_JOB, CREATE_JOB_FAIL, DELETE_JOB, DELETE_JOB_FAIL, UPDATE_JOB, UPDATE_JOB_FAIL, JOBS_LOADING
} from "./jobs.types";
import { tokenConfig } from '../../auth/auth.actions'

// View all jobs
export const getJobs = () => async (dispatch, getState) => {
  await dispatch(getJobsLoading());

  try {
    await axios
      .get('/api/jobs', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: GET_JOBS,
          payload: res.data,
        }))
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

// Create Job
export const createJob = (newJob) => async (dispatch) => {

  try {
    await axios
      .post('/api/jobs', newJob)
      .then(res =>
        dispatch({
          type: CREATE_JOB,
          payload: res.data
        }))

      // Reload the page after category addition
      // .then(window.location.reload())

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'CREATE_JOB_FAIL'));
    dispatch({ type: CREATE_JOB_FAIL })
  }
};


// Update a Job
export const updateJob = updatedJob => async (dispatch, getState) => {

  try {
    await axios
      .put(`/api/jobs/${updatedJob.qId}`, updatedJob, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: UPDATE_JOB,
          payload: updatedJob
        }),
        alert('Updated Successfully!'))

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'UPDATE_JOB_FAIL'));
    dispatch({ type: UPDATE_JOB_FAIL })
  }
}

// Delete a Job
export const deleteJob = id => async (dispatch, getState) => {

  try {
    if (window.confirm("This Job will be deleted permanently!")) {
      await axios
        .delete(`/api/jobs/${id}`, tokenConfig(getState))
        .then(res =>
          dispatch({
            type: DELETE_JOB,
            payload: id
          }),
          alert('Deleted Successfully!'))
    }

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'DELETE_JOB_FAIL'));
    dispatch({ type: DELETE_JOB_FAIL })
  }
}

export const getJobsLoading = () => {
  //Return an action to the reducer
  return {
    //action 
    type: JOBS_LOADING

  };
}
