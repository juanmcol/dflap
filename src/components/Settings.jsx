import { useDispatch, useSelector } from "react-redux";
import { selectDisplayCustom, selectDisplayJustify, setCustom, setJustify } from "../features/display/displaySlice";

export const Settings = () => {
  const dispatch = useDispatch();
  const custom = useSelector(selectDisplayCustom);
  const justify = useSelector(selectDisplayJustify);

  function handleCustom() {
    if (custom === false)
      dispatch(setCustom(true));
    else
      dispatch(setCustom(false));
  }

  return (
    <div id="settings">
      <div class="toggle-option">
        <p>Custom: </p>
        <div class="toggle">
          <button class="toggle-button" onClick={handleCustom}/>
          <div class="toggle-background">
            <div class="toggle-green">On</div>
            <div class="toggle-red">Off</div>
          </div>
        </div>
      </div>
    </div>
  )
}