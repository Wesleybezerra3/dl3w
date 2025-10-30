import React, { useState } from 'react'
import style from './style.module.css'
import { BtnPeriods } from '../../../componets/Students/BtnPeriods'
import { ArrowLeftCircleIcon, ArrowRightCircle } from 'lucide-react';

import calendar from '../../../assets/icons/Calendar.png'
import note from '../../../assets/icons/Note.png'
import goodNotes from '../../../assets/icons/GoodNotes.png'
import arrow from '../../../assets/icons/Arrow.png'
import { CardDashboardStudent } from '../../../componets/Cards/CardDashboardStudent';
import { Link } from 'react-router-dom';


export const HomeStudent = () => {
  const periods = ['2025.1','2025.2','2026.3','2026.4'];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(periods.length - 1, c + 1));

  return (
    <>
     <section className={style.containerWelcome}>
        <h1>Olá! Wesley Bezerra👋</h1>
     </section>
     <section >
      <div className={style.courseName}>
        <h2>Análise e desenvolvimento de sistemas</h2>
      </div>
      <div className={style.carroselPeriods}> 
        <button className={style.btnPeriods} onClick={prev} aria-label="Anterior" disabled={current === 0}>
          <ArrowLeftCircleIcon size={20} className={style.iconBtn} />
        </button>

        <div className={style.viewport}>
          <div
            className={style.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {periods.map((period, index) => (
              <div className={style.slide} key={index}>
                <BtnPeriods period={period} />
              </div>
            ))}
          </div>
        </div>

        <button className={style.btnPeriods} onClick={next} aria-label="Próximo" disabled={current === periods.length - 1}>
          <ArrowRightCircle size={20} className={style.iconBtn}/>
        </button>
      </div>
     </section>

     <section className='container'>

              <CardDashboardStudent backColor={'#038B20'} number={91} icon={calendar} text={'Presença'}  textSecudary={'Global'}/>
              <CardDashboardStudent backColor={'#0A51BD'} number={8.5} icon={note} text={'Média'}  textSecudary={'Global'}/>
              <CardDashboardStudent backColor={'#999514'} number={6.8} icon={goodNotes} text={'Ultima Nota'}  textSecudary={'Banco de dados'}/>
     </section>

     <section className='container'>
      <div className={style.bottomMenu}>
            <button className={style.btnActive}>
              Sobre o Curso
              <img src={arrow} alt="" />
            </button>
          
            <button className={style.btnActive}>
              Quadro de Horários
              <img src={arrow} alt="" />
            </button>

      </div>
     </section>
    </>
  )
}
