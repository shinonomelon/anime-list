import * as types from "./types";

export const yearCountAction = (yearState) => {
  return {
    type: types.YEAR_COUNT,
    payload: yearState.year,
  };
};

export const seasonCountAction = (seasonState) => {
  return {
    type: types.SEASON_COUNT,
    payload: seasonState.season,
  };
};


export const setPeriodAction = (periodState) => {
  return {
    type: types.PERIOD_COUNT,
    payload: {
      year: periodState.year,
      season: periodState.season
    }
  }
}