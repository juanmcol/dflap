import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectInput, setInput } from './textInputSlice';
import { updateFlapOutput } from '../display/displaySlice';

// Text Input component.
// Originally it just updates the output,
// but I want it to push different output arrays of characters to an array (add button),
// and then have the display will swap between them on an interval.
export const TextInput = () => {
  const input = useSelector(selectInput);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onTextChangeHandler = (e) => {
    setText(e.target.value);
  }

  const onClickInputHandler = () => {
    dispatch(updateFlapOutput(text.toUpperCase().split("")));
  }

  return (
    <div id="text-input-container">
      <input
        id="text-input"
        type="text"
        placeholder="type here"
        onChange={onTextChangeHandler}
      />
      <button
        id="add-button"
        type="button"
        onClick={onClickInputHandler}
      >change</button>
    </div>
  )
}