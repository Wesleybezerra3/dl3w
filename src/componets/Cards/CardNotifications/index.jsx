import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Check, X } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";

export const CardNotifications = () => {
  const [visible, setVisible] = useState(false);
  const {
    notificationMessage,
    resetKey,
    typeNotification,
    setNotificationMessage,
    setResetKey,
    setTypeNotification,
  } = useAppContext();

  useEffect(() => {
    console.log(notificationMessage);
    if (notificationMessage) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        const clearValue = "";
        setNotificationMessage(clearValue);
        setTypeNotification(clearValue);
        // setResetKey()
      }, 4000);
    }
  }, [notificationMessage, resetKey]);
  return (
    <>
      <div
        className={style.card}
        style={{ display: !visible ? "none" : "flex" }}
      >
        <div>
          <div className={style.check} style={{backgroundColor: typeNotification==='e'? '#f53636':'#59e259ff'}}>
            <Check size={25} className={style.icon} color="#fff" />
          </div>
        </div>
        <div className={style.containerMessage}>
          <p className={style.message} style={{color: typeNotification==='e'?'#f53636':'#59e259ff'}}>{notificationMessage}</p>
        </div>
        <div>
          <div className={style.cancel}>
            <button onClick={()=>{
                setVisible(false)
            }}>
              <X size={15} className={style.icon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
