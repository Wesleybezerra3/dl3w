import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../../services/api";
import { Load } from "../../../Loards/load";
import { useAppContext } from "../../../../context/AppContext";

export const ChangePassword = ({ visible, onClose, matricula }) => {
  const {
    setNotificationMessage,
    setResetKey,
    setTypeNotification,
    refresh,
    courses,
  } = useAppContext();
  const [load, setLoad] = useState(false);
  const [classes, setClasses] = useState([]);
  const [newPassword, setNewPassword] = useState();

  const changeClass = async (matricula) => {
    try {
      setLoad(true);
      console.log(matricula);
      const response = await api.put("/alunos/reset-password", { matricula });
      const message = response.data.message;
      // setNotificationMessage(message);
      // setResetKey((prev) => prev + 1);
      // setTypeNotification("s");
      console.log(response.data);
      setNewPassword(response.data.novaSenha);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // onClose();
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          {newPassword ? (
            <p className={style.textNewPassword}>
              Nova Senha temporaria: <span>{newPassword}</span>
            </p>
          ) : (
            <h2>Resertar Senha?</h2>
          )}
        </div>
        <div className={style.footerModal}>
          <button type="button" className={style.cancelBtn} onClick={onClose}>
            {newPassword ? "Fechar" : "Cancelar"}
            {/* Cancelar */}
          </button>
          <button
            style={{ display: !newPassword ? "block" : "none" }}
            type="submit"
            className={style.saveBtn}
            onClick={() => changeClass(matricula)}
          >
            <Load visible={load} />
            {load ? "" : "Resetar"}
          </button>
        </div>
      </div>
    </div>
  );
};
