import React from "react";
import style from "./style.module.css";
import { BookTextIcon, CheckSquare, CogIcon, Edit2, LogOut, NotepadText, PieChart, Users2, UserSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MenuSide = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
  }

  return (
    <>
      <aside className={style.menuSide}>
        <div className={style.headerMenu}>
          <div className={style.profilePhoto}></div>
          <div className={style.infoUser}>
            <div>
              <p>Wesley Bezerra</p>
              <span>Administrador</span>
            </div>
             {/* <div className={style.editProfile}>
              <CogIcon className={style.icon} />
            </div>  */}
          </div>
        </div>
        <div className={style.menu}>
          <div className={style.optionsMenu}>
            <div className={style.start}>
              <h2>Inicio</h2>
              <ul>
                <li>
                  <a href="/dashboard" className={style.links}>
                    <PieChart className={style.icon} /> Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.management}>
              <h2>Gestão</h2>
              <ul>
                <li>
                  <a href="/dashboard/gerenciamento_de_usuarios" className={style.links}>
                    <Users2 className={style.icon} />{" "}
                    Gerenciamento de
                    Usuários
                  </a>
                </li>
                <li>
                  <a href="/dashboard/disciplinas_horarios" className={style.links}>
                    {" "}
                    <BookTextIcon className={style.icon} />
                    Disciplinas e Horários
                  </a>
                </li>
                <li>
                  <a href="" className={style.links}>
                    {" "}
                    <UserSquare className={style.icon} />
                    Matrículas
                  </a>
                </li>
                <li>
                  <a href="" className={style.links}>
                    {" "}
                    <CheckSquare className={style.icon} />
                    Presenças
                  </a>
                </li>
                <li>
                  <a href="" className={style.links}>
                    {" "}
                    <NotepadText className={style.icon} />
                    Relatórios e Logs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.logout}>
            <button onClick={logout} className={style.btnLogout}>
              {" "}
              <LogOut className={style.icon} />
              Sair
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
