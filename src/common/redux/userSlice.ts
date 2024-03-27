import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces/user.interface";

const initialState: User = {
  phone: "",
  documentType: "",
  document: "",
  name: "",
  lastName: "",
  birthDay: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.phone = action.payload.phone;
      state.documentType = action.payload.documentType;
      state.document = action.payload.document;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.birthDay = action.payload.birthDay;
    }
  }
})

export const { registerUser, updateUser } = userSlice.actions;
export default userSlice.reducer;