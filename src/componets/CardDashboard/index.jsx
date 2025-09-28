import React from 'react'
import style from './style.module.css'
import studentIcon from '../../assets//icons/StudentIcon.png'

export const CardDashboard = ({backColor, color, number, icon, text }) => {
  return (
    <>
    <article className={style.card} style={{backgroundColor:color}}>
        <div className={style.containerText}>
            <p className={style.text}>
                {text}
                <span>{number}</span>
                Ao total
            </p>
        </div>
        <div className={style.containerIcon}>
            <img src={studentIcon} alt="" />
        </div>
    </article>
    </>
  )
}
