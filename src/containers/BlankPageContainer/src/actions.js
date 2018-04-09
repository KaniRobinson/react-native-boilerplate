import { RSAA } from "redux-api-middleware";
import { API_URL } from "@config";

export const FETCH_JOKES = "FETCH_JOKES";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

export const fetchJokes = () => ({
  [RSAA]: {
    endpoint: `${API_URL}/jokes?limitTo=[nerdy]`,
    method: "GET",
    types: ["FETCH_JOKES", "FETCH_JOKES_SUCCESS", "FETCH_JOKES_FAILURE"]
  }
});
