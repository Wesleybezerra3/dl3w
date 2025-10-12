import React from 'react'
import style from './style.module.css'
import studentIcon from '../../../assets//icons/StudentIcon.png'

export const CardDashboard = ({backColor, number, icon, text}) => {
  return (
    <>
    <article className={style.card}>
      <div className={style.maker} style={{backgroundColor:backColor}}>
      </div>
        <div className={style.containerText}>
            <p className={style.text}>
                {text}
                <span>{number}</span>
                Ao total
            </p>
        </div>
        <div className={style.containerIcon} style={{backgroundColor:backColor}}>
            <img src={icon} alt="" />
        </div>
    </article>
    </>
  )
}
