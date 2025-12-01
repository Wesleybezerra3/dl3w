import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../services/api";
import { useAppContext } from "../../../context/AppContext";

export const NewStudent = ({ visible, onClose }) => {
  const { classes } = useAppContext();

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    turma: "",
  });

  const NewStudent = async () => {
    console.log(form);
    try {
      const response = await api.post("/alunos", form);
      alert("Aluno matriculado com sucesso!");
      console.log(response.data);
    } catch (err) {
      alert("Erro ao criar novo aluno");
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
      alert("Por favor, preencha todos os campos");
      return;
    }
    NewStudent();
    setForm({
      nome: "",
      cpf: "",
      email: "",
      data_nascimento: "",
      turma: "",
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
          <h2>Novo Aluno</h2>
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
              placeholder="Digite o nome completo"
              value={form.nome}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="Digite o e-mail do aluno"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="cpf">CPF</label>
            <input
              name="cpf"
              type="text"
              placeholder="Digite o cpf do aluno"
              value={form.cpf}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="data">Data de nascimenteo</label>
            <input
              name="data_nascimento"
              type="date"
              placeholder="Digite a data de nascimento"
              value={form.data_nascimento}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {/* <div className={style.inputGroup}>
            <label htmlFor="curso">Curso</label>
            <select name="curso" value={form.curso} onChange={handleChange}>
              <option value="" selected disabled>
                Selecione
              </option>
              {cursos.map((curso, index) => (
                <option key={index} value={curso}>
                  {curso}
                </option>
              ))}
            </select>
          </div> */}
          <div className={style.inputGroup}>
            <label htmlFor="turma">Turmas</label>
            <select name="turma" value={form.turma} onChange={handleChange}>
              <option value="" selected disabled>
                Selecione
              </option>
              {classes.map((classe, index) => (
                <option key={index} value={classe.id}>
                  {classe.nome}
                </option>
              ))}
            </select>
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
