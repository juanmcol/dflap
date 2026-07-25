import { useDispatch, useSelector } from "react-redux";
import { selectDisplayCustom, selectDisplayJustify, setCustom, setJustify } from "../features/display/displaySlice";
import { useState } from "react";

export const Settings = () => {
  const dispatch = useDispatch();
  const custom = useSelector(selectDisplayCustom);
  const justify = useSelector(selectDisplayJustify);

  const [minimize, setMinimize] = useState(true);

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

  function handleMinimize() {
    if (minimize === true) {
      setMinimize(false);
    } else {
      setMinimize(true);
    }
  }

  return (
    <div id="settings-container" class={ minimize ? "maximize" : "minimize" }>
      <button id="settings-minimize" title={ minimize ? "minimize settings" : "maximize settings" } class={ minimize ? "minBtnMin" : "" }onClick={handleMinimize}>{ minimize ? "-" : "+" }</button>
      <div id="settings" class={ minimize ? "settingsDisplay" : "settingsHide" }>
        <div id="settings-info">Click change to apply changes</div>
        <div class="toggle-option">
          <div class="toggle-name">Custom: </div>
          <div class="toggle">
            <button class={ custom ? "toggle-button toggleSwitchOn" : "toggle-button toggleSwitchOff" } onClick={handleCustom}/>
            <div class={ custom ? "toggle-background toggleBackgroundOn" : "toggle-background toggleBackgroundOff" } onClick={handleCustom}>
              <div class={ custom ? "toggle-green toggleTextShow" : "toggle-green toggleTextHide" }>On</div>
              <div class={ custom ? "toggle-red toggleTextHide" : "toggle-red toggleTextShow" }>Off</div>
            </div>
          </div>
        </div>
        <div class="toggle-option">
          <div class="toggle-name">Justify: </div>
          <div class="toggle">
            <button class={ justify ? "toggle-button toggleSwitchOn" : "toggle-button toggleSwitchOff" } onClick={handleJustify}/>
            <div class={ justify ? "toggle-background toggleBackgroundOn" : "toggle-background toggleBackgroundOff" } onClick={handleJustify}>
              <div class={ justify ? "toggle-green toggleTextShow" : "toggle-green toggleTextHide" }>On</div>
              <div class={ justify ? "toggle-red toggleTextHide" : "toggle-red toggleTextShow" }>Off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}