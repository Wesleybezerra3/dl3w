import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../services/api";
import { useAppContext } from "../../../context/AppContext";

export const NewSala = ({ visible, onClose }) => {
  const [form, setForm] = useState({
    nome: "",
    capacidade: "",
    localizacao: "",
  });

  const NewTeacher = async () => {
    console.log(form);
    try {
      const response = await api.post("/salas", form);
      if (response.status !== 201) {
        alert("Erro ao criar nova sala");
        throw new Error("Erro ao criar nova sala");
      }
      if (response.status === 201) {
        alert("Sala criada com sucesso!");
      }
      console.log(response.data);
    } catch (err) {
      console.log(err);
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

    NewTeacher();
    setForm({
      nome: "",
      capacidade: "",
      localizacao: "",
    });

    onClose();
  };

  return (
    <div
      className={style.modalBackground}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={style.modalContainer}>
        <div className={style.titleModal}>
          <h2>Nova Sala</h2>
        </div>
        <form className={style.formModal} onSubmit={handleSubmit}>
          {/* <div className={style.inputGroup}>
            <label htmlFor="matricula">Matrícula</label>
            <input
              name="matricula"
              type="text"
              placeholder="Digite a matrícula"
              value={form.matricula}
              onChange={handleChange}
              autoComplete="off"
            />
          </div> */}
          <div className={style.inputGroup}>
            <label htmlFor="nome">Nome</label>
            <input
              name="nome"
              type="text"
              placeholder="Nome da sala"
              value={form.nome}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="capacidade">Capacidade</label>
            <input
              name="capacidade"
              type="text"
              placeholder="Capacidade da sala"
              value={form.capacidade}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="localizacao">Localização</label>
            <input
              name="localizacao"
              type="text"
              placeholder="Localização da sala"
              value={form.localizacao}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.footerModal}>
            <button type="button" className={style.cancelBtn} onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className={style.saveBtn}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
