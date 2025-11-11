import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { BookCopyIcon, Home, LogOut, PieChart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

export const MenuSide = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const {user} = useAppContext();
  const [name, setName] = useState('');

  const formattedName = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    if (names.length === 1) return names[0];
    setName(`${names[0]} ${names[names.length - 1]}`);
  }


  const logout = () => {
    navigate("/");
  }
  useEffect(() => {
    formattedName(user?.nome);
    // fechar com ESC
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <div
        onClick={() => onClose && onClose()}
        className={`${style.back} ${visible ? style.show : ""}`}
      />

      <aside className={`${style.menuSide} ${visible ? style.open : ""}`}>
        <div className={style.headerMenu}>
          <div className={style.profilePhoto}></div>
          <div className={style.infoUser}>
            <div>
              <p>{name}</p>
              <span>Aluno</span>
            </div>
            {/* <div className={style.editProfile}>
                        <CogIcon className={style.icon} />
                      </div>  */}
          </div>
        </div>
           <div className={style.menu}>
            <div className={style.optionsMenu}>
              <div className={style.start}>
                <ul>
                  <li>
                    <Link to="/student/plataform/home" className={style.links}>
                      <Home className={style.icon} /> <span>Inicio</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={style.management}>
                <ul>
                  <li>
                    <Link to="/student/plataform/mycourse" className={style.links}>
                      <BookCopyIcon className={style.icon} /> <span>Meu Curso</span>
                    </Link>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className={style.logout}>
              <button className={style.btnLogout} onClick={logout}>
                {" "}
                <LogOut className={style.icon} />
                <span>Sair</span>
              </button>
            </div>
          </div>
      </aside>
    </>
  );
};
