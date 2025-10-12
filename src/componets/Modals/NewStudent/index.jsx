import React, { useState } from "react";
import style from "./style.module.css";

export const NewStudent = ({ visible, onClose }) => {
  const cursos = [
    "ADS",
    "Direito",
    "Engenharia Civil",
    "Administração",
    "Pedagogia",
    "Enfermagem",
    "Psicologia",
    "Arquitetura",
    "Biomedicina",
    "Educação Física",
    "Nutrição",
  ];
  const turmas = [
    "0Ad20-4° - N",
    "0Ad20-4° - T",
    "0Ad21-3° - N",
    "0Ad21-3° - T",
    "0Ad22-2° - N",
  ];

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    curso: "",
    turma: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
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
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="turma">Turmas</label>
            <select name="turma" value={form.turma} onChange={handleChange}>
              <option value="" selected disabled>
                Selecione
              </option>
              {turmas.map((turma, index) => (
                <option key={index} value={turma}>
                  {turma}
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
