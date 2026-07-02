import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectInput, setInput } from './textInputSlice';
import { updateFlapOutput, selectDisplayLimit, selectDisplayData } from '../display/displaySlice';
import { onClickInputHandler } from './onClickInputHandler';

export const TextInput = () => {
  const input = useSelector(selectInput);
  const limit = useSelector(selectDisplayLimit);
  const data = useSelector(selectDisplayData);
  const dispatch = useDispatch();
  
  const onTextChangeHandler = (e) => {
    dispatch(setInput(e.target.value));
  }

  /* const onClickInputHandler = () => {
    // dispatch(updateFlapOutput([text.toUpperCase().split("")]));
    let filter = "";
    for (const char of input) {
      if (data.includes(char.toUpperCase())) {
        filter += char.toUpperCase();
      } else {
        filter += "?";
      }
    }
    
    let words = filter.split(" ");
    console.log(words);
    words = words.filter(word => word !== "");
    
    const grid = [];
    let row = "";

    for(let i = 0; i < words.length; ++i) {
      console.log(words[i]);
      if (row.length === 0) {
        row = words[i];
      } else if (row.length + words[i].length < limit) {
        row += " " + words[i];
      } else {
        grid.push(row.split(""));
        row = words[i];
      }

      if (!words[i + 1]) {
        grid.push(row.split(""));
      }
    }

    dispatch(updateFlapOutput(grid));
  }
 */

  return (
    <div id="text-input-container">
      <input
        id="text-input"
        type="text"
        placeholder="type here"
        onChange={onTextChangeHandler}
        maxLength={105}
      />
      <button
        id="change-button"
        type="button"
        onClick={() => dispatch(updateFlapOutput(onClickInputHandler(input, data, limit)))}
      >change</button>
    </div>
  )
}