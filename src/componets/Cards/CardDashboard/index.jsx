import React from 'react'
import style from './style.module.css'


export const CardDashboard = ({backColor, number, icon, text, textSecudary}) => {
  return (
    <>
    <article className={style.card}>
      <div className={style.maker} style={{backgroundColor:backColor}}>
      </div>
        <div className={style.containerText}>
            <p className={style.text}>
                {text}
                <span>{number}</span>
                {textSecudary}
            </p>
        </div>
        <div className={style.containerIcon} style={{backgroundColor:backColor}}>
            <img src={icon} alt="" />
        </div>
    </article>
    </>
  )
}
