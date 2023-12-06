import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpMethod";
const initialState = {
  userList: [],
};
export const TestSlice = createSlice({
  name: "user_list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userList = action.payload;
    })
  },
});

export const getUser = createAsyncThunk("user_list/getUser", async () => {
  try {
    const res = await getRequest(`User`)
    return res.data;
  } catch (error) {
    console.log({ error });
  }
});

export default TestSlice;