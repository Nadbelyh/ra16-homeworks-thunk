import { configureStore } from "@reduxjs/toolkit";
import starWarsFactsSlice from "../features/starWarsFacts/starWarsFactsSlice";
import usersPhotoSlice from "../features/usersPhoto/usersPhotoSlice";

export const store = configureStore({
  reducer: {
    starWarsFacts: starWarsFactsSlice,
    usersPhoto: usersPhotoSlice,
  },
});
