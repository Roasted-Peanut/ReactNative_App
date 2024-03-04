import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { fetchUserById } from "../slices/userSlice";

export const userInitialState: IUser = {
  userInfo: {},
  isEndUser: false,
  tokenData: {},
  contentFlagged: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    userLogin: () => {
      // TODO: add action when user login
    },
    userSignUp: () => {
      // TODO: add action when user sign up
    },
    logout: () => {
      // TODO: add action when user logout
    },
  },
  // add slice create thunk
  extraReducers(builder) {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.userInfo = action.payload;
    })
  },
});

// export const userActions = {
//   ...userSlice.actions,
// }
export const userActions = userSlice.actions;

export default userSlice.reducer;
