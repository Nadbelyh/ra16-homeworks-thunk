import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersPhotoArr: [],
};

const usersPhotoSlice = createSlice({
  name: "usersPhoto",
  initialState,
  reducers: {
    addUsersPhoto: (state, action) => {
      state.usersPhotoArr.push(action.payload);
    },
  },
});

export const { addUsersPhoto } = usersPhotoSlice.actions;
export default usersPhotoSlice.reducer;
