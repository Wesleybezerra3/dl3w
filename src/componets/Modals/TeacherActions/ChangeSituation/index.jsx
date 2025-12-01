import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../../services/api";
import { Load } from "../../../Loards/load";
import { useAppContext } from "../../../../context/AppContext";

export const ChangeSituacionTeacher = ({
  visible,
  onClose,
  matricula,
  currentSituacao,
}) => {
  const { setNotificationMessage, setResetKey, setTypeNotification, refresh, courses  } =
    useAppContext();
  const [load, setLoad] = useState(false);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    situacao: "",
  });

  const changeClass = async (matricula, situacao) => {
    try {
      setLoad(true);
      console.log(matricula,situacao)
      const response = await api.put("/professores/change-status",{matricula, situacao});
      const message = response.data.message;
      // setNotificationMessage(message);
      // setResetKey((prev) => prev + 1);
      // setTypeNotification("s");
      console.log(response);
    } catch (err) {
      const message = err.response.data.message;
      // setNotificationMessage(message);
      // setResetKey((prev) => prev + 1);
      // setTypeNotification("e");
      console.log(err);
    } finally {
      setLoad(false);
      refresh();

    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.situacao) {
      alert("Selecione uma nova situação");
      return;
    }

    changeClass(matricula,form.situacao)

    setForm({ situacao: "" });
    onClose();
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          <h2>Mudar Situação</h2>
        </div>

        <form className={style.formModal} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="currentSituacao">Situação Atual</label>
            <input
            style={{color: currentSituacao==='ativo'?'green':'red', fontWeight:"bold"}}
              name="currentSituacao"
              type="text"
              value={currentSituacao}
              disabled
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="situacao">Nova situação</label>
            <select name="situacao" value={form.situacao} onChange={handleChange}>
              <option value="" disabled>
                Selecione
              </option>
                <option value="ativo">
                  ativo
                </option>
                <option value="Inativo">
                  Inativo
                </option>
            </select>
          </div>

          <div className={style.footerModal}>
            <button type="button" className={style.cancelBtn} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={style.saveBtn}>
              <Load visible={load} />
              {load ? "" : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
