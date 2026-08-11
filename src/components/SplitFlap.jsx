import { useEffect, useState } from "react";
import { selectDisplayData, selectFlapIndex, updateFlapIndex } from "../features/display/displaySlice.jsx";
import { useSelector, useDispatch } from "react-redux";

function SplitFlap({index, element}) {
  const dispatch = useDispatch();
  const data = useSelector(selectDisplayData);
  const flapIndex = useSelector(selectFlapIndex);
  const start = flapIndex[index];
  const stop = element;
  const [current, setCurrent] = useState(data[start]);
  const [next, setNext] = useState(data[start + 1]);
  const [animate, setAnimate] = useState(true);
  const [play, setPlay] = useState(true);

  const limit = data.length - 1;
  let i1 = start;
  let i2 = start + 1;

  useEffect(() => {
    if (current === stop) {
      dispatch(updateFlapIndex({index, value: data.indexOf(current)}));
      setPlay(false);
      return;
    }

    const interval = setInterval(() => {
      setPlay(true);
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
    }, 80);

    return () => clearInterval(interval);
  }, [current !== stop]);

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 80);
  }, [current])

  return (
    <div className="split-flap">
      <audio loop autoPlay muted={ play ? false : true } src="src/assets/sounds/flipsoundX8.mp3"></audio>
      <div className="current">
        <div className={ animate ? "top flipTop" : "top" }>{current}</div>
        <div className="bottom">{current}</div>
      </div>
      <div className="next">
        <div className="top">{next}</div>
        <div className={ animate ? "bottom flipBot" : "bottom" }>{next}</div>
      </div>
    </div>
  );
}

export default SplitFlap;