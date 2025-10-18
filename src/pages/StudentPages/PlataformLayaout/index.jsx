import React from 'react'
import { HeaderStudent } from '../../../componets/Students/Header'
import style from './style.module.css'
import { Outlet } from 'react-router-dom'

export const PlataformLayout = () => {
  return (
    <>
        <HeaderStudent/>
        <main>
            <section className={style.content}>
                <Outlet/>
            </section>

        </main>
    </>
  )
}
