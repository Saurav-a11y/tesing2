import {
  FETCH_PROFILE_LIST_START,
  FETCH_PROFILE_LIST_SUCESS,
  SET_SINGLE_PROFILE_LIST,
} from "./types";
import shopData from "./shopData";
export const fetchProfileListAsync = () => (dispatch) => {
  dispatch({
    type: FETCH_PROFILE_LIST_START,
  });
  // api call//
  dispatch({
    type: FETCH_PROFILE_LIST_SUCESS,
    payload: shopData,
  });
};

export const setSingleProfileList = (index) => (dispatch) => {
  dispatch({
    type: SET_SINGLE_PROFILE_LIST,
    payload: index,
  });
};
