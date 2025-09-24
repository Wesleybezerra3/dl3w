import React from 'react'
import style from './style.module.css'
import editIcon from '../../assets/icons/Edit.png'

export const CardSchedule = ({day, schedule, discipline, teacher, room, classs}) => {
  return (
    <>
        <article className={style.card}>
            <div className={style.headerCard}>
                <p>{day}</p>
                <p>08:00 - 12:00</p>
            </div>
            <div className={style.contentCard}>
                <p>Lógica de programação</p>
                <p>Professor: Fulano de Tal</p>
                <p>Sala: 01</p>
                <p>Turma: pl44002A</p>

            </div>
            <div className={style.actionsCard}>
                <button>
                    <img src={editIcon} alt="" />
                </button>
            </div>
        </article>
    </>
  )
}
