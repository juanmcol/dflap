import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: ''
};

const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    }
  }
})

export const { setInput } = textInputSlice.actions;
export default textInputSlice.reducer;
export const selectInput = (state) => state.textInput.input;