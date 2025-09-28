import React from "react";
import style from "./style.module.css";

export const Addbtn = ({text}) => {
  return (
    <>
      <button className={style.addBtn}>{text}</button>
    </>
  );
};
