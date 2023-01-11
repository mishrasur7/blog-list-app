import { createSlice } from "@reduxjs/toolkit";

import userService from "../services/user";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    createUser(state, action) {
      return [...state, action.payload]
    }
  },
});

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    const newUser = await userService.register(user)
    dispatch(createUser(newUser))
  }
}

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
