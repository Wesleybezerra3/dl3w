import React from "react";
import style from "./style.module.css";
import { Edit2, Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CardRoom = ({
  nameRoom,
  location,
  capacidade,
  status,
  qtdturma,
}) => {
  const navigator = useNavigate();
  return (
    <>
      <article className={style.cardRoom}>
        <div className={style.infoRoom}>
          <div className={style.headerCard}>
            <p>{nameRoom}</p>
            <button
              className={style.btn}
              onClick={() => {
                navigator(`/adm/dashboard/salas/${nameRoom}`);
              }}
            >
              <Eye className={style.icon} />
            </button>
          </div>
          <p>
            Localização: <span>{location}</span>
          </p>
          <p>
            Capacidade: <span>{capacidade}</span>
          </p>
          <p>
            Status: <span>Ativa</span>
          </p>
          <p>
            Turmas: <span>{qtdturma}</span>
          </p>
        </div>

        {/* <div className={style.actions}>
          <button className={style.btn}>
            <Edit2 className={style.icon} />
          </button>
          <button className={style.btn}>
            <Trash className={style.icon} />
          </button>
        </div> */}
      </article>
    </>
  );
};
