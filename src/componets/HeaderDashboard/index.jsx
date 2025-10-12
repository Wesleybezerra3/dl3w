import React from "react";
import style from "./style.module.css";
import logo from "../../assets/logo3.svg";
import { Cog } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

export const HeaderDashboard = () => {
    const {course} = useAppContext();

  return (
    <>
      <header className={style.headerDashboard}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <p>DL3W Ensino Superior</p>
          
          {/* <select name="class" id="class" className={style.selectClass}>
            <option value="" disabled selected>
             {course}
            </option>
            
            <option value="ads">Análise e Desenvolvimento de Sistemas</option>
            <option value="cc">Ciência da Computação</option>
            <option value="ec">Engenharia Civil</option>
          </select> */}
        </div>
        <div className={style.config}>
           <button className={style.btnConfig}>
                <Cog size={'30px'}/>
            </button> 
        </div>
      </header>
    </>
  );
};
