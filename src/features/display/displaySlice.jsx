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
  deviceW: screen.width,
  isLoading: false,
  hasError: false,
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

      // remove extra lines
      if (state.flapOutput.length > 5) {
        state.flapOutput = state.flapOutput.slice(0, 5);
      }
      let upper = Math.ceil(state.rows / 2);

      if (state.custom === false) {
        if (state.flapOutput.length < upper) {
          while (state.flapOutput.length < upper) {
            state.flapOutput = [
              Array(state.columns).fill(state.data[0]),
              ...state.flapOutput
            ]
          }
        } else if ((state.flapOutput.length + 2) <= state.rows) {
          while (state.flapOutput.length >= upper) {
            state.flapOutput = [
              Array(state.columns).fill(state.data[0]),
              ...state.flapOutput
            ]
            upper *= 2;
          }
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
    },
    setColumns: (state, action) => {
      const width = action.payload;

      if (width >= 3823) {
        state.columns = 43;
      } else if (width >= 2134) {
        state.columns = 24;
      } else if (width >= 1868) {
        state.columns = 21;
      } else if (width >= 1778) {
        state.columns = 20;
      } else if (width >= 1690) {
        state.columns = 19;
      } else if (width >= 1600) {
        state.columns = 18;
      } else if (width >= 1512) {
        state.columns = 17;
      } else if (width >= 1424) {
        state.columns = 16;
      } else if (width >= 1334) {
        state.columns = 15;
      } else if (width >= 1246) {
        state.columns = 14;
      } else if (width >= 1156) {
        state.columns = 13;
      } else if (width >= 1068) {
        state.columns = 12;
      } else if (width >= 978) {
        state.columns = 11;
      } else if (width >= 890) {
        state.columns = 10;
      } else if (width >= 800) {
        state.columns = 9;
      } else if (width >= 712) {
        state.columns = 8;
      } else if (width >= 624) {
        state.columns = 7;
      } else if (width >= 534) {
        state.columns = 6;
      } else if (width >= 446) {
        state.columns = 5;
      } else if (width >= 356) {
        state.columns = 4;
      } else if (width >= 268) {
        state.columns = 3;
      } else if (width >= 184) {
        state.columns = 2;
      } else {
        state.columns = 1;
      }
    },
    setLimit: (state) => {
      state.limit = state.columns;
    },
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

export const { loadData, setFlapIndex, updateFlapOutput, updateFlapIndex, setColumns, setLimit } = displaySlice.actions;
export default displaySlice.reducer;

export const selectDisplayData = (state) => state.display.data;
export const selectFlapOutput = (state) => state.display.flapOutput;
export const selectFlapIndex = (state) => state.display.flapIndex;
export const selectDisplayLimit = (state) => state.display.limit;