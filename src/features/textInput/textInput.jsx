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