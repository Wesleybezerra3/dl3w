import React, { useState } from 'react'
import { HeaderStudent } from '../../../componets/Students/Header'
import style from './style.module.css'
import { Outlet } from 'react-router-dom'
import { MenuSide } from '../../../componets/Students/MenuSide'
import { Bell, Menu } from 'lucide-react'
import logo from '../../../assets/logo2.png'

export const PlataformLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
        <header className={style.header}>
            <div>
                <button onClick={()=>{
                    setIsOpen(!isOpen)
                }}>
                    <Menu size={25} />
                </button>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <button onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                    <Bell size={20} />
                </button>
            </div>
        </header>
        <MenuSide visible={isOpen} onClose={() => setIsOpen(!isOpen)} />
        <main>
            <section className={style.content}>
                <Outlet/>
            </section>

        </main>

        <footer>

        </footer>
    </>
  )
}
