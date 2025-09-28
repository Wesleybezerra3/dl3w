import style from "./style.module.css";
import logo from '../../assets/logo.png'
import { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../../context/AppContext";

export const SelectCourse = () => {
      const { setCourse } = useAppContext();

    const [selectValue, setSelectValue] = useState();
    const navigate = useNavigate();
    const [btnClass, setBtnClass] = useState();


    const handleClass = (e) => {
        e.preventDefault();
        setCourse(selectValue)
        if (selectValue) {
            navigate('/login')
            console.log(selectValue)
        }
    }
  return (
    <>
      <form className={style.selectRoleForm} onSubmit={handleClass}>
        <div className={style.headerForm}>
          <h1>Selecione um curso</h1>
          <img src={logo} alt="" />
        </div>
        <div className={style.select}>
          <select
            name="class"
            id="class"
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Cursos
            </option>
            <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
            <option value="Engenharia Civil">Engenharia Civil</option>
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
