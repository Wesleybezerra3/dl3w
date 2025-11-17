import React from 'react'
import style from './style.module.css'
import { Edit2, Eye, Trash } from 'lucide-react'

export const CardRoom = ({nameRoom, location, capacidade, status, qtdturma}) => {
  return (
    <>
      <article className={style.cardRoom}>
        <div className={style.infoRoom}>
          <p>
            {nameRoom}
          </p>
          <p>
            Localização: <span>{location}</span>
          </p>
          <p>
            Capacidade: <span>{capacidade}</span>
          </p>
          <p>
            Status: <span>Ativa</span>
          </p>
           <p>
            Turmas: <span>{qtdturma}</span>
          </p>
        </div>

        <div className={style.actions}>
          <button className={style.btn}>
            <Eye className={style.icon} />
            Ver</button>
          <button className={style.btn}>
            <Edit2 className={style.icon} />
            Editar</button>
          <button className={style.btn}>
            <Trash className={style.icon} />
            Excluir</button>
        </div>
      </article>
    </>
  )
}
