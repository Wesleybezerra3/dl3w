import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import api from "../../../services/api";
import { useAppContext } from "../../../context/AppContext";

export const NewTeacher = ({ visible, onClose }) => {
  const { classes } = useAppContext();
 
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    data_nascimento: "",
    titulacao:''

  });

  const NewTeacher = async ()=>{
    console.log(form);
    try{
      const response = await api.post('/professores', form)
      if(response.status !== 201){
        alert("Erro ao criar novo aluno");
        throw new Error("Erro ao matricular novo professor");
      }
      if(response.status === 201){
        alert("Professor matriculado com sucesso!");
      }
      console.log(response.data);
    }catch(err){
      console.log(err);
    }
  }

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
      cpf: "",
      email: "",
      data_nascimento: "",
      curso: "",
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
          <h2>Novo Profesor</h2>
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
            <label htmlFor="data">Data de nascimento</label>
            <input
              name="data_nascimento"
              type="text"
              placeholder="Digite a data de nascimento"
              value={form.data_nascimento}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
           <div className={style.inputGroup}>
            <label htmlFor="data">Titulação</label>
            <input
              name="titulacao"
              type="text"
              placeholder="Digite a titulação do professor"
              value={form.titulacao}
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
