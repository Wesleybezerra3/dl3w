import React, { use } from 'react'
import styles from './style.module.css'
import logo from '../../../assets/logo2.png'
import { useNavigate } from 'react-router-dom';

export const FirstAcess = () => {
    const navigate = useNavigate();

  return (
    <div className={styles.container}>
        {/* <img src={logo} alt="" /> */}
        <div className={styles.containerBtns}>
            <button className={styles.btnLogin} onClick={()=>{
                navigate('/student/login')
            }}>
                Entrar
            </button>
            <button className={styles.btnFirstAcess} onClick={()=>{
                navigate('/student/passworddefine')
            }}>
                Primeiro Acesso
            </button>
        </div>
    </div>
  )
}
