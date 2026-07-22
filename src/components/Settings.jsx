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
      <p>Click change to apply changes</p>
      <div class="toggle-option">
        <p>Custom: </p>
        <div class="toggle">
          <button class={ custom ? "toggle-button toggleSwitchOn" : "toggle-button toggleSwitchOff" } onClick={handleCustom}/>
          <div class={ custom ? "toggle-background toggleBackgroundOn" : "toggle-background toggleBackgroundOff" }>
            <div class={ custom ? "toggle-green toggleTextShow" : "toggle-green toggleTextHide" }>On</div>
            <div class={ custom ? "toggle-red toggleTextHide" : "toggle-red toggleTextShow" }>Off</div>
          </div>
        </div>
      </div>
    </div>
  )
}