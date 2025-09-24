import React from 'react'
import style from './style.module.css'
import { CardDashboard } from '../../componets/CardDashboard'
import { CardSchedule } from '../../componets/CardSchedule'

export const Dashboard = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.infoArea}>
          <CardDashboard/>
          <CardDashboard/>
          <CardDashboard/>
          <CardDashboard/>

        </div>
        <div className={style.scheduleArea}>
          <div className={style.headerSchedule}>
          <p>Horário da turma</p>
          </div>
          <div className={style.schedule}>
            <CardSchedule day={'Segunda-Feira'}/>
            <CardSchedule day={'Terça-Feira'}/>
            <CardSchedule day={'Quarta-Feira'}/>
            <CardSchedule day={'Quinta-Feira'}/>
            <CardSchedule day={'Sexta-Feira'}/>
          </div>
        </div>
      </section>
    </>
  )
}
