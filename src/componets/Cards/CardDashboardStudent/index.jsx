import React from "react";
import style from "./style.module.css";
import studentIcon from "../../../assets//icons/StudentIcon.png";

export const CardDashboardStudent = ({
  backColor,
  number,
  icon,
  text,
  textSecudary,
}) => {
  // Derivar a classe com base no valor de `number` sem usar estado
  let className = "";

  // Se o número parece ser uma nota (escala 0-10)
  if (typeof number === "number" && number <= 10) {
    if (number >= 7) className = style.goodNote;
    else if (number >= 5) className = style.averageNote;
    else className = style.weakNote;
  } else {
    // Tratar como percentual/presença (0-100)
    if (number >= 70) className = style.goodPresence;
    else if (number >= 50) className = style.averagePresence;
    else className = style.weakPresence;
  }

  return (
    <>
      <article className={style.card}>
        {/* <div
          className={style.maker}
        //   style={{ backgroundColor: backColor }}
        ></div> */}
        <div className={style.containerText}>
          <p className={style.text}>
            {text}
            <span className={className}>
              {number}
              {typeof number === "number" && number > 10 ? "%" : ""}
            </span>
            {textSecudary}
          </p>
        </div>
        <div
          className={style.containerIcon}
          style={{ backgroundColor: backColor }}
        >
          <img src={icon} alt="" />
        </div>
      </article>
    </>
  );
};
