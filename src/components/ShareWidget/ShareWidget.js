import React, { useState } from "react";
import Button from "../common/Button";
import share from "../../assets/share.svg";
import styles from "./index.module.css";
import ShareMainCard from "../ShareMainCard";
function ShareWidget() {
  const [showShare, setShowShare] = useState(false);
  function handleClick() {
    setShowShare(!showShare);
  }
  return (
    <div id={styles.wrapper}>
      <h2 className={styles.heading}>Click on Share button</h2>
      <Button
        text="Share"
        icon={share}
        handleClick={handleClick}
        extraClass="shareBtn"
      />
      {showShare && (
        <div className={styles.shareMainWrapper}>
          <ShareMainCard />
        </div>
      )}
    </div>
  );
}
export default ShareWidget;
