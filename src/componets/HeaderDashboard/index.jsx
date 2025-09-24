import React from 'react'
import style from './style.module.css'
import logo from '../../assets/logo3.svg'
import { Cog } from "lucide-react";

export const HeaderDashboard = () => {
  return (
    <>
    <header className={style.headerDashboard}>
        <div className={style.logo}>
            <img src={logo} alt="Logo" />
        </div>
        <div>
            <select name="class" id="class" className={style.selectClass}>
                <option value="" disabled selected>Selecione a turma</option>
                <option value="1">ADS 4° Período</option>
                <option value="2">2º Ano B</option>
                <option value="3">3º Ano C</option>
            </select>
        </div>
        <div className={style.config}>
            {/* <button className={style.btnConfig}>
                <Cog size={'30px'}/>
            </button> */}
        </div>
    </header>
    </>
  )
}
