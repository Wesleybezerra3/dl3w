import React from 'react'
import style from './style.module.css'
import { Eye, SettingsIcon } from 'lucide-react'

export const CardClass = ({turmaName, salaName, cursoName, turno, qtdAlunos}) => {
  return (
    <>
        <article className={style.cardClass}>
            <div className={style.containerTitleClass}>
                <p>
                    {turmaName} - {cursoName} 
                </p>
            </div>
            <div className={style.containerInfoActions}>
                <div className={style.infoClass}>
                    <div>
                        <p>Sala: <span>{salaName}</span></p>
                        <p>Turno: <span>{turno}</span></p>
                    </div>
                    <div>
                        <p>Alunos: <span>{qtdAlunos}</span></p>
                        <div>- -</div>
                        {/* <p>Código: <span>Hvd17-1° - M</span></p> */}
                    </div>
                </div>
                <div className={style.actionsClass}>
                    <button className={style.btnActions}>
                        <Eye size={16}/>
                    </button>
                    <button className={style.btnActions}>
                        <SettingsIcon size={16}/>
                    </button>
                </div>
            </div>
        </article>
    </>
  )
}
