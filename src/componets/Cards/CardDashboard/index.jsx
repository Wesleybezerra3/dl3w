import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'


export const CardDashboard = ({backColor, number, icon, text,route, textSecudary}) => {
  const navigate = useNavigate();

  const handleNavigate = (route)=>{
    navigate(`/adm/dashboard/${route}`)
  }
  return (
    <>
    <article className={style.card} onClick={()=>handleNavigate(route)}>
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
