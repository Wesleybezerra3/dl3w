import { Bell, Menu } from 'lucide-react'
import React from 'react'
import logo from '../../../assets/logo2.png'
import style from './style.module.css'

export const HeaderStudent = () => {
  return (
    <>
        <header className={style.header}>
            <div>
                <button>
                    <Menu size={25} />
                </button>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <button>
                    <Bell size={20} />
                </button>
            </div>
        </header>
    </>
  )
}
