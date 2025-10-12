import React from 'react'
import style from './style.module.css'
import { Eye, SettingsIcon } from 'lucide-react'

export const CardClass = () => {
  return (
    <>
        <article className={style.cardClass}>
            <div className={style.containerTitleClass}>
                <p>
                    1°A - Analise e desenvolvimento de sistemas 
                </p>
            </div>
            <div className={style.containerInfoActions}>
                <div className={style.infoClass}>
                    <div>
                        <p>Sala: <span>01 - Bloco B</span></p>
                        <p>Turno: <span>Manhã</span></p>
                    </div>
                    <div>
                        <p>Alunos: <span>25/40</span></p>
                        <p>Código: <span>Hvd17-1° - M</span></p>
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
