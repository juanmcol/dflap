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

  function handleJustify() {
    if (justify === true)
      dispatch(setJustify(false));
    else
      dispatch(setJustify(true));
  }

  return (
    <div id="settings">
      <div id="settings-info">Click change to apply changes</div>
      <div class="toggle-option">
        <div class="toggle-name">Custom: </div>
        <div class="toggle">
          <button class={ custom ? "toggle-button toggleSwitchOn" : "toggle-button toggleSwitchOff" } onClick={handleCustom}/>
          <div class={ custom ? "toggle-background toggleBackgroundOn" : "toggle-background toggleBackgroundOff" }>
            <div class={ custom ? "toggle-green toggleTextShow" : "toggle-green toggleTextHide" }>On</div>
            <div class={ custom ? "toggle-red toggleTextHide" : "toggle-red toggleTextShow" }>Off</div>
          </div>
        </div>
      </div>
      <div class="toggle-option">
        <div class="toggle-name">Justify: </div>
        <div class="toggle">
          <button class={ justify ? "toggle-button toggleSwitchOn" : "toggle-button toggleSwitchOff" } onClick={handleJustify}/>
          <div class={ justify ? "toggle-background toggleBackgroundOn" : "toggle-background toggleBackgroundOff" }>
            <div class={ justify ? "toggle-green toggleTextShow" : "toggle-green toggleTextHide" }>On</div>
            <div class={ justify ? "toggle-red toggleTextHide" : "toggle-red toggleTextShow" }>Off</div>
          </div>
        </div>
      </div>
    </div>
  )
}