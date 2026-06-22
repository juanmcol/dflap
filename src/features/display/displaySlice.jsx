import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';

import characters from '../../assets/comps/characters';

// Allow user to change row and column amount. Place text in the center after the button is clicked.
const initialState = {
  data: characters,
  flapOutput: [
    "H", "E", "L", "L", "O", ",", " ",
    "W", "O", "R", "L", "D", "!"
  ],
  flapIndex: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  rows: 9,
  columns: 16,
  middle: 72,
  isLoading: false,
  hasError: false
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    loadData: (state) => {
      state.data = characters;
    },
    setFlapIndex: (state) => {
      state.flapIndex = [];
      state.flapOutput.forEach(e => state.flapIndex.push(state.data.indexOf(e)));
    },
    updateFlapOutput: (state, action) => {
      // state.flapOutput = action.payload;
      state.flapOutput = [];
      console.log(state.flapOutput);
      for (let i = 0; i < 52 - Math.floor(action.payload.length / 2); ++i) {
        state.flapOutput.push(" ");
      }
      console.log(state.flapOutput);
      action.payload.forEach(e => state.flapOutput.push(e));
      console.log(state.flapOutput);
      for (let i = 0; i < 52 - Math.floor(action.payload.length / 2); ++i) {
        state.flapOutput.push(" ");
      }
      console.log(state.flapOutput);
      if (action.payload.length % 2 === 0) {
        state.flapOutput.push(" ");
      }
    },
    updateFlapIndex: (state, action) => {
      const {index, value} = action.payload;
      state.flapIndex[index] = value;
    }
  },
  extraReducers: (builder) => {
    builder
    /* .addCase(functionName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
    }) */
    .addMatcher(isPending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })
    .addMatcher(isRejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
})

export const { loadData, setFlapIndex, updateFlapIndex, updateFlapOutput } = displaySlice.actions;
export default displaySlice.reducer;

export const selectDisplayData = (state) => state.display.data;
export const selectFlapOutput = (state) => state.display.flapOutput;
export const selectFlapIndex = (state) => state.display.flapIndex;
export const selectDisplayMiddle = (state) => state.display.middle;