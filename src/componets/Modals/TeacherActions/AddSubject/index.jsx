import React, { useEffect, useState } from "react";
import style from "./style.module.css";

import api from "../../../../services/api";
import { useAppContext } from "../../../../context/AppContext";
import { Load } from "../../../Loards/load";

export const NewSubject = ({
  visible,
  onClose,
  teacherDisciplines,
  id_professor,
}) => {
  const [form, setForm] = useState({
    novaDisciplina: "",
  });
  const [load, setLoad] = useState(false);

  const { disciplines, refresh } = useAppContext();

  const NewDiscipline = async (id_disciplina, id_professor) => {
    try {
      console.log("data new:", form);
      const response = await api.post("/professores/add-discipline", {
        id_disciplina,
        id_professor,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      onClose();
      refresh();
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    if (Object.values(form).some((field) => !field)) {
      alert("Preencha todos os campos");
      return;
    }

    NewDiscipline(form.novaDisciplina, id_professor);
    setForm({
      novaDisciplina: "",
    });
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          <h2>Nova Disciplina</h2>
        </div>
        <form className={style.formModal} onSubmit={handleSubmit}>
          <div className={style.inputGroup}>
            <label htmlFor="novaDisciplina">Diciplinas</label>
            <select
              name="novaDisciplina"
              value={form.novaDisciplina}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                Selecione
              </option>
              {disciplines.map((discipline, index) => (
                <option
                  key={index}
                  value={discipline.id}
                  disabled={teacherDisciplines.some(
                    (tc) => tc.nome === discipline.nome
                  )}
                >
                  {discipline.nome}
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
