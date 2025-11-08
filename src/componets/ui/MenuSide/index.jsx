import React from "react";
import style from "./style.module.css";
import { Backpack, BookTextIcon, CheckSquare, CogIcon, DoorOpen, Edit2, LogOut, NotepadText, PieChart, Users2, UserSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
              <span>Wesley Bezerra</span>
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
              <h2><span>Inicio</span></h2>
              <ul>
                <li>
                  <Link to="/adm/dashboard" className={style.links}>
                    <PieChart className={style.icon} /> <span>Dashboard</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.management}>
              <h2><span>Gestão</span></h2>
              <ul>
                <li>
                  <Link to="/adm/dashboard/alunos" className={style.links}>
                    <Backpack className={style.icon} />{" "}
                    <span>
                      Alunos
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/adm/dashboard/professores" className={style.links}>
                    <Users2 className={style.icon} />{" "}
                    <span>
                      Professores
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/adm/dashboard/disciplinashorarios" className={style.links}>
                    {" "}
                    <BookTextIcon className={style.icon} />
                    <span>Disciplinas e Horários</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className={style.links}>
                    {" "}
                    <DoorOpen className={style.icon} />
                    <span>Salas</span>
                  </Link>
                </li>
                <li>
                  <Link to="/adm/dashboard/turmas" className={style.links}>
                    {" "}
                    <UserSquare className={style.icon} />
                    <span>Turmas</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className={style.links}>
                    {" "}
                    <CheckSquare className={style.icon} />
                    <span>Presenças</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className={style.links}>
                    {" "}
                    <NotepadText className={style.icon} />
                    <span>Relatórios e Logs</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.logout}>
            <button onClick={logout} className={style.btnLogout}>
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
