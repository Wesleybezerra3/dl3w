import React from 'react'
import style from './style.module.css'
import { CardDashboard } from '../../componets/CardDashboard'
import { CardSchedule } from '../../componets/CardSchedule'

export const Dashboard = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.infoArea}>
          <CardDashboard text={'Alunos Matrículados'} number={'100'}/>
          <CardDashboard text={'Professores'} number={'10'}/>
          <CardDashboard text={'Disciplinas'} number={'7'}/>
          <CardDashboard text={'Média Geral'} number={'8.0'}/>

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
