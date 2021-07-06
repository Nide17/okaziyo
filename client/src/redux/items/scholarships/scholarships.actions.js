import axios from 'axios';
import { returnErrors } from '../../error/error.actions'
import {GET_SCHOLARSHIPS, CREATE_SCHOLARSHIP, CREATE_SCHOLARSHIP_FAIL, DELETE_SCHOLARSHIP, DELETE_SCHOLARSHIP_FAIL, UPDATE_SCHOLARSHIP, UPDATE_SCHOLARSHIP_FAIL, SCHOLARSHIPS_LOADING
} from "./scholarships.types";
import { tokenConfig } from '../../auth/auth.actions'

// View all scholarships
export const getScholarships = () => async (dispatch, getState) => {
  await dispatch(getScholarshipsLoading());

  try {
    await axios
      .get('/api/scholarships', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: GET_SCHOLARSHIPS,
          payload: res.data,
        }))
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

// Create Scholarship
export const createScholarship = (newScholarship) => async (dispatch) => {

  try {
    await axios
      .post('/api/scholarships', newScholarship)
      .then(res =>
        dispatch({
          type: CREATE_SCHOLARSHIP,
          payload: res.data
        }))

      // Reload the page after category addition
      // .then(window.location.reload())

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'CREATE_SCHOLARSHIP_FAIL'));
    dispatch({ type: CREATE_SCHOLARSHIP_FAIL })
  }
};


// Update a Scholarship
export const updateScholarship = updatedScholarship => async (dispatch, getState) => {

  try {
    await axios
      .put(`/api/scholarships/${updatedScholarship.qId}`, updatedScholarship, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: UPDATE_SCHOLARSHIP,
          payload: updatedScholarship
        }),
        alert('Updated successfully!'))

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'UPDATE_SCHOLARSHIP_FAIL'));
    dispatch({ type: UPDATE_SCHOLARSHIP_FAIL })
  }
}

// Delete a Scholarship
export const deleteScholarship = id => async (dispatch, getState) => {

  try {
    if (window.confirm("This Scholarship will be deleted permanently!")) {
      await axios
        .delete(`/api/scholarships/${id}`, tokenConfig(getState))
        .then(res =>
          dispatch({
            type: DELETE_SCHOLARSHIP,
            payload: id
          }),
          alert('Deleted Successfully!'))
    }

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'DELETE_SCHOLARSHIP_FAIL'));
    dispatch({ type: DELETE_SCHOLARSHIP_FAIL })
  }
}

export const getScholarshipsLoading = () => {
  //Return an action to the reducer
  return {
    //action 
    type: SCHOLARSHIPS_LOADING

  };
}
