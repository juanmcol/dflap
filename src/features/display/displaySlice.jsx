import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';

import characters from '../../assets/comps/characters';

// Allow user to change row and column amount. Place text in the center after the button is clicked.
const initialState = {
  data: characters,
  flapOutput: [
    ["H", "E", "L", "L", "O", ",", " ",
    "W", "O", "R", "L", "D", "!"]
  ],
  flapIndex: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  rows: 5,
  columns: 21,
  limit: 21,
  justify: "center",
  custom: false,
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
      state.flapOutput = action.payload;
      
      // justify
      if (state.justify === "left") {
        state.flapOutput.forEach(arr => {
          const length1 = arr.length;
          arr.length = state.columns;
          arr.fill(" ", length1, arr.length);
        })
      } else if (state.justify === "center") {
        state.flapOutput.forEach(arr => {
          const length1 = arr.length;
          const side = Math.floor((state.columns - length1) / 2);
          for (let i = 0; i < side; ++i) {
            arr.unshift(" ");
          }
          const length2 = side + length1;
          arr.length = state.columns;
          arr.fill(" ", length2, arr.length);
        })
      }

      if (state.flapOutput.length > 5) {
        state.flapOutput = state.flapOutput.slice(0, 5);
      }
      const upper = Math.ceil(state.rows / 2);

      if (state.custom === false) {
        while (state.flapOutput.length < upper) {
          state.flapOutput = [
            Array(state.columns).fill(state.data[0]),
            ...state.flapOutput
          ]
        }
      }
      
      while (state.flapOutput.length < state.rows) {
        state.flapOutput = [
          ...state.flapOutput,
          Array(state.columns).fill(state.data[0])
        ]
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
export const selectDisplayLimit = (state) => state.display.limit;