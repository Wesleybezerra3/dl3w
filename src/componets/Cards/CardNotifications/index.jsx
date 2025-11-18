import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Check, X } from 'lucide-react'

export const CardNotifications = ({type, message}) => {
    const [visible,setVisible]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false)
        },4000)
    },[])
  return (
    <>
        <div className={style.card} style={{display: !visible ?'none':'flex'}}>
            <div>
                <div>
                    <Check size={32}/>
                </div>
            </div>
            <div>
                <p>
                    Login realizado com sucesso!
                </p>
            </div>
            <div>
                <div>
                    <X size={32}/>
                </div>
            </div>
        </div>
    </>
  )
}
