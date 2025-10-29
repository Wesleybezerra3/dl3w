import React from 'react'
import style from './style.module.css'

export const BtnPeriods = ({ period, className }) => {
  return (
    <>
      <button className={className ? className : style.btn}>
        {period}
      </button>
    </>
  )
}
