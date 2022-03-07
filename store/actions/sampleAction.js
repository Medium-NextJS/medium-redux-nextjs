import { GET_SAMPLE, SAMPLE_ERROR } from "../types";

export const getSampleData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAMPLE,
      payload: [1, 2, 3, 4, 5, 6],
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
