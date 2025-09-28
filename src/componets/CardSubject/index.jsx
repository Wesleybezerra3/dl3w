import React from 'react'
import style from './style.module.css'
import editIcon from '../../assets/icons/Edit.png'

export const CardSubject = ({discipline, workload,modality}) => {
  return (
    <>
        <article className={style.card}>
            <div className={style.headerCard}>
                <p>{discipline}</p>
            </div>
            <div className={style.contentCard}>
                <p>Carga Horária: {workload}</p>
                <p>Modalidade: {modality}</p>
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
