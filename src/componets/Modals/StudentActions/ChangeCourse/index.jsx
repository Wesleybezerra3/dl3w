import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../../services/api";
import { Load } from "../../../Loards/load";
import { useAppContext } from "../../../../context/AppContext";

export const ChangeCourse = ({
  visible,
  onClose,
  matricula,
  currentCourse,
}) => {
  const { setNotificationMessage, setResetKey, setTypeNotification, refresh, courses  } =
    useAppContext();
  const [load, setLoad] = useState(false);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    curso: "",
  });

  const changeClass = async (matricula, id_curso) => {
    try {
      setLoad(true);
      console.log(matricula, id_curso)
      const response = await api.put("/alunos/change-course",{matricula, id_curso});
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

    if (!form.curso) {
      alert("Selecione uma nova turma");
      return;
    }

    changeClass(matricula,form.curso)

    setForm({ curso: "" });
    onClose();
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          <h2>Mudar Curso</h2>
        </div>

        <form className={style.formModal} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="currentClass">Curso atual</label>
            <input
              name="currentClass"
              type="text"
              value={currentCourse}
              disabled
            />
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="curso">Novo curso</label>
            <select name="curso" value={form.curso} onChange={handleChange}>
              <option value="" disabled>
                Selecione
              </option>

              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.nome}
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
