import React, { useState } from 'react'
import style from './style.module.css'
import { BtnPeriods } from '../../../componets/Students/BtnPeriods'
import { ArrowLeftCircleIcon, ArrowRightCircle } from 'lucide-react';

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
     <section>
      <div className={style.courseName}>
        <h2>Análise e desenvolvimento de sistemas</h2>
      </div>
      <div className={style.carroselPeriods}> 
        <button onClick={prev} aria-label="Anterior" disabled={current === 0}>
          <ArrowLeftCircleIcon size={20} />
        </button>

        <div className={style.viewport}>
          <div
            className={style.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {periods.map((period, index) => (
              <div className={style.slide} key={index}>
                <BtnPeriods period={period} className={style.periodBtn} />
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} aria-label="Próximo" disabled={current === periods.length - 1}>
          <ArrowRightCircle size={20} />
        </button>
      </div>
     </section>
    </>
  )
}
