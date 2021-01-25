import {
  FETCH_PROFILE_LIST_FAILURE,
  FETCH_PROFILE_LIST_START,
  FETCH_PROFILE_LIST_SUCESS,
  SET_SINGLE_PROFILE_LIST,
} from "./types";

const initialState = {
  loading: false,
  profileList: [],
  error: "",
  activeSocialMediaType: "facebook",
};

const profileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_LIST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROFILE_LIST_SUCESS:
      return {
        ...state,
        loading: false,
        profileList: action.payload,
      };

    case FETCH_PROFILE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SINGLE_PROFILE_LIST:
      return {
        ...state,
        singleProfile: action.payload,
        activeSocialMediaType: action.payload ? action.payload.title : "",
      };
    default:
      return state;
  }
};

export default profileDataReducer;
