import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadData, selectFlapOutput, updateFlapOutput, setColumns, setLimit } from "./displaySlice.jsx";
import SplitFlap from "../../components/SplitFlap.jsx";

export const Display = () => {
  const dispatch = useDispatch();
  const flapOutput = useSelector(selectFlapOutput);

  const onFirstRender = () => {
    const deviceWidth = screen.width;
    dispatch(loadData());
    dispatch(setColumns(deviceWidth));
    dispatch(updateFlapOutput(flapOutput.map(row => [...row])));
    /* dispatch(setFlapIndex()); */
  }
  useEffect(onFirstRender, []);

  // update the display when the window size changes.
  const [currentWidth, setCurrentWidth] = useState(0);

  const interval = setInterval(() => {
    setCurrentWidth(window.innerWidth);
  }, 2000)

  useEffect(() => {
    console.log(currentWidth);
    dispatch(setColumns(currentWidth));
    dispatch(updateFlapOutput(flapOutput.map(row => [...row])));
    dispatch(setLimit());
  }, [currentWidth])

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