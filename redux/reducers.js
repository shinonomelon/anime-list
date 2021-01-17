import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  year: 2020,
  season: 1,
};

// COUNTER REDUCER
const yearReducer = (state = initialState.year, action) => {
  switch (action.type) {
    case types.YEAR_COUNT:
      return (state = action.payload);
    default:
      return state;
  }
};

const seasonReducer = (state = initialState.season, action) => {
  switch (action.type) {
    case types.SEASON_COUNT:
      return (state = action.payload);
    default:
      return state;
  }
};

const periodReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.PERIOD_COUNT:
      return state = action.payload
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  year: yearReducer,
  season: seasonReducer,
  period: periodReducer
};

export default combineReducers(reducers);
