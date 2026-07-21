import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadData, selectFlapOutput, updateFlapOutput, setColumns, setLimit, selectDisplayData, selectDisplayLimit, selectDisplayCustom } from "./displaySlice.jsx";
import SplitFlap from "../../components/SplitFlap.jsx";
import { onClickInputHandler } from "../textInput/onClickInputHandler.js";
import { selectInput } from "../textInput/textInputSlice.jsx";

export const Display = () => {
  const dispatch = useDispatch();
  const flapOutput = useSelector(selectFlapOutput);
  const input = useSelector(selectInput);
  const data = useSelector(selectDisplayData);
  const limit = useSelector(selectDisplayLimit);
  const custom = useSelector(selectDisplayCustom);
  
  // update the display when the window size changes.
  const [currentWidth, setCurrentWidth] = useState(0);

  // update screen width every x ms
  const interval = setInterval(() => {
    setCurrentWidth(window.innerWidth);
  }, 2000)

  useEffect(() => {
    console.log(currentWidth);
    dispatch(setColumns(currentWidth));
    dispatch(setLimit());
    dispatch(updateFlapOutput(flapOutput.map(row => [...row])));
  }, [currentWidth])

  useEffect(() => {
    console.log(custom);
    dispatch(updateFlapOutput(flapOutput.map(row => [...row])));
  }, [custom])

  // first render
  const onFirstRender = () => {
    const deviceWidth = screen.width;
    dispatch(loadData());
    dispatch(setColumns(deviceWidth));
    dispatch(setLimit());
    // dispatch(updateFlapOutput(flapOutput.map(row => [...row])));
    dispatch(updateFlapOutput(onClickInputHandler(input, data, limit)));
    setCurrentWidth(deviceWidth);
  }
  useEffect(onFirstRender, []);
    

  // component
  return (
    <div id="display-container">
      <div id="display">
        {
          flapOutput.flat().map((e, index) => {
            return <SplitFlap key={index} index={index} element={e}/>
          })
        }
      </div>
    </div>
  )
}