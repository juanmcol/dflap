import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectDisplayData, loadData, setFlapIndex, selectFlapIndex, selectFlapOutput, selectDisplayMiddle, updateFlapOutput } from "./displaySlice.jsx";
import SplitFlap from "../../components/SplitFlap.jsx";

export const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDisplayData);
  const flapIndex = useSelector(selectFlapIndex);
  const flapOutput = useSelector(selectFlapOutput);

  const onFirstRender = () => {
    dispatch(loadData());
    dispatch(updateFlapOutput(flapOutput));
    /* dispatch(setFlapIndex()); */
  }
  useEffect(onFirstRender, []);
  

  return (
    <div id="display">
      {
        flapOutput.map((e, index) => {
          return <SplitFlap key={index} index={index} element={e}/>;
        })
      }
    </div>
  )
}