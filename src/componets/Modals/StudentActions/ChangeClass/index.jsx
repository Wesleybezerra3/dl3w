import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../../services/api";
import { Load } from "../../../Loards/load";
import { useAppContext } from "../../../../context/AppContext";

export const ChangeClass = ({
  visible,
  onClose,
  matricula,
  id,
  currentClass,
}) => {
  const { setNotificationMessage, setResetKey, setTypeNotification, refresh  } =
    useAppContext();
  const [load, setLoad] = useState(false);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    turma: "",
  });

  useEffect(() => {
    const getTurmasByCurso = async () => {
      try {
        if (!visible) return; // só busca quando o modal abrir

        console.log("ID do Curso:", id);
        const response = await api.get("/turmas/getTurmasByCurso", {
          params: { id },
        });
        setClasses(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTurmasByCurso();
  }, [visible, id]);

  const changeClass = async (matricula, id_turma) => {
    try {
      setLoad(true);
      console.log(matricula, id_turma)
      const response = await api.put("/alunos/change-class",{matricula, id_turma});
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

    if (!form.turma) {
      alert("Selecione uma nova turma");
      return;
    }

    changeClass(matricula,form.turma)

    setForm({ turma: "" });
    onClose();
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          <h2>Mudar Turma</h2>
        </div>

        <form className={style.formModal} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="currentClass">Turma Atual</label>
            <input
              name="currentClass"
              type="text"
              value={currentClass}
              disabled
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="turma">Nova Turma</label>
            <select name="turma" value={form.turma} onChange={handleChange}>
              <option value="" disabled>
                Selecione
              </option>

              {classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.nome} - {classe.turno}
                </option>
              ))}
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
