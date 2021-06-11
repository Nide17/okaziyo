import axios from 'axios';
import { returnErrors } from '../error/error.actions'
import {GET_ITEMS, CREATE_ITEM, CREATE_ITEM_FAIL, DELETE_ITEM, DELETE_ITEM_FAIL, UPDATE_ITEM, UPDATE_ITEM_FAIL, ITEMS_LOADING
} from "./items.types";
import { tokenConfig } from '../auth/auth.actions'

// View all items
export const getItems = () => async (dispatch, getState) => {
  await dispatch(getItemsLoading());

  try {
    await axios
      .get('/api/items', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: GET_ITEMS,
          payload: res.data,
        }))
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

// Create Quiz
export const createQuiz = (newQuiz) => async (dispatch, getState) => {

  try {
    await axios
      .post('/api/items', newQuiz, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: CREATE_ITEM,
          payload: res.data
        }),
        alert('Created Successfully!'))

      // Reload the page after category addition
      .then(window.location.reload())

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'CREATE_ITEM_FAIL'));
    dispatch({ type: CREATE_ITEM_FAIL })
  }
};


// Update a Quiz
export const updateQuiz = updatedQuiz => async (dispatch, getState) => {

  try {
    await axios
      .put(`/api/items/${updatedQuiz.qId}`, updatedQuiz, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: UPDATE_ITEM,
          payload: updatedQuiz
        }),
        alert('Updated Successfully!'))

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'UPDATE_ITEM_FAIL'));
    dispatch({ type: UPDATE_ITEM_FAIL })
  }
}

// Delete a Quiz
export const deleteQuiz = id => async (dispatch, getState) => {

  try {
    if (window.confirm("This Quiz will be deleted permanently!")) {
      await axios
        .delete(`/api/items/${id}`, tokenConfig(getState))
        .then(res =>
          dispatch({
            type: DELETE_ITEM,
            payload: id
          }),
          alert('Deleted Successfully!'))
    }

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'DELETE_ITEM_FAIL'));
    dispatch({ type: DELETE_ITEM_FAIL })
  }
}

export const getItemsLoading = () => {
  //Return an action to the reducer
  return {
    //action 
    type: ITEMS_LOADING

  };
}
