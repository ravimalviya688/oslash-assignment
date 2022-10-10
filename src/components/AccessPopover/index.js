import { SHOW_ALL } from "rc-tree-select";
import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import "./index.css";
function AccessPopover({ defaulAccess, handleAccessClick }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  function changeAccess(type) {
    handleAccessClick(type);
    handleClick(false);
  }
  return (
    <div className="access">
      <div className="selected-access" onClick={handleClick}>
        <span>{defaulAccess}</span>
        <ArrowIcon />
      </div>
      {isOpen && (
        <div className="access-wrapper">
          <h6 onClick={() => changeAccess("Full access")}>Full access</h6>
          <h6 onClick={() => changeAccess("Can edit")}>Can edit</h6>
          <h6 onClick={() => changeAccess("Can view")}>Can view</h6>
          <h6 onClick={() => changeAccess("No access")}>No access</h6>
        </div>
      )}
    </div>
  );
}
export default AccessPopover;
