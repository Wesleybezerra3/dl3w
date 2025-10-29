import React, { useEffect } from "react";
import style from "./style.module.css";
import { BookCopyIcon, Home, LogOut, PieChart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MenuSide = ({ visible, onClose }) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  }
  useEffect(() => {
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
              <p>Wesley Bezerra</p>
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
                    <a href="/student/plataform/home" className={style.links}>
                      <Home className={style.icon} /> <span>Inicio</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={style.management}>
                <ul>
                  <li>
                    <a href="/student/plataform/mycourse" className={style.links}>
                      <BookCopyIcon className={style.icon} /> <span>Meu Curso</span>
                    </a>
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
