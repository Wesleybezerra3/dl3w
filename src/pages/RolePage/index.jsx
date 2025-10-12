import style from './style.module.css'
import logo from '../../assets/logo.png'
import { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CargoPage = () => {
    // const [selectValue, setSelectValue] = useState("");
    // const navigate = useNavigate();
    // // const [btnClass, setBtnClass] = useState();



    // const handleCargo = () => {
    //     if (selectValue) {
    //         navigate('/login')
    //         console.log(selectValue)
    //     }
    // }
    // // useEffect(() => {
    // //     if (selectValue) {
    // //        setBtnClass('ativado')
    // //        return;
    // //     }

    // //     if(!selectValue){
    // //         setBtnClass('')
    // //     }
    // // }, [selectValue])


    return (
        <>
            <main className={style.container}>
                <section className={style.containerHero}>
                </section>
                <section className={style.containerLogin}>
                    <form className={style.login} onSubmit={handleCargo}>

                        <div className={style.headerLogin}>
                            <h1>Qual sua função?</h1>
                            <img src={logo} alt="" />
                        </div>
                        <div className={style.select}>
                            <select name="cargo" id="cargo" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                                <option value="" disabled>Selecione</option>
                                <option value="Aluno">Aluno</option>
                                <option value="Professor">Professor</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                        </div>
                        <div className={style.containerBtn}>
                            <button className={style.btnLogin} type='submit'> 
                                Continuar
                            </button>
                        </div>
                    </form>
                </section>

            </main>
        </>
    )
}