import style from "./style.module.css";
import logo from '../../assets/logo.png'
import { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SelectRole = () => {

    const [selectValue, setSelectValue] = useState();
    const navigate = useNavigate();
    const [btnClass, setBtnClass] = useState();


    const handleCargo = (e) => {
        if (selectValue) {
            navigate('/login')
            console.log(selectValue)
        }
    }
  return (
    <>
      <form className={style.selectRoleForm} onSubmit={handleCargo}>
        <div className={style.headerForm}>
          <h1>Qual sua função?</h1>
          <img src={logo} alt="" />
        </div>
        <div className={style.select}>
          <select
            name="cargo"
            id="cargo"
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        <div className={style.containerBtn}>
          <button type="submit" className={style.btnSelect}>
            Continuar
          </button>
        </div>
      </form>
    </>
  );
};
