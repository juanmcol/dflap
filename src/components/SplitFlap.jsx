import { useEffect, useState } from "react";
import { selectDisplayData, selectFlapIndex, updateFlapIndex } from "../features/display/displaySlice.jsx";
import { useSelector, useDispatch } from "react-redux";

// top and bottom need to be split in half, next needs to be behind current.
function SplitFlap({index, element}) {
  const dispatch = useDispatch();
  const data = useSelector(selectDisplayData);
  const flapIndex = useSelector(selectFlapIndex);
  const start = flapIndex[index];
  const stop = element;
  const [current, setCurrent] = useState(data[start]);
  const [next, setNext] = useState(data[start + 1]);
  
  const limit = data.length - 1;
  let i1 = start;
  let i2 = start + 1;
  let loop = 0;

  useEffect(() => {
    if (current === stop) {
      dispatch(updateFlapIndex({index, value: data.indexOf(current)}));
      return;
    }

    const interval = setInterval(() => {
      if (i2 < limit && i1 < limit) {
        ++i1;
        ++i2;
        setNext(data[i2]);
        setCurrent(data[i1]);
      } else if (i1 < limit) {
        i1 = limit;
        i2 = 0;
        setNext(data[i2]);
        setCurrent(data[i1]);
      } else {
        i1 = 0;
        ++i2;
        setNext(data[i2]);
        setCurrent(data[i1]);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [current !== stop]);

  loop = 0;

  return (
    <div className="split-flap">
      <div className="current">
        <div className="top">{current}</div>
        <div className="bottom">{current}</div>
      </div>
      <div className="next">
        <div className="top">{next}</div>
        <div className="bottom">{next}</div>
      </div>
    </div>
  );
}

export default SplitFlap;