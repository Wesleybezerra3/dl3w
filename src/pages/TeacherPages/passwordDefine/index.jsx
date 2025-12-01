import style from "./style.module.css";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import api from "../../../services/api";

export const PasswordDefine = () => {
  // const {role} = useAppContext();
  const navigate = useNavigate();

  const [definePasswordData, setDefinePassword] = useState({
    matricula: "",
    oldPassword: "",
    newPassword: "",
  });

  const definePassword = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/alunos/definir-senha", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status !== 200) {
        throw new Error("Erro ao definir senha");
      }
      const message = response.data.message;
      alert(message);
      
      setTimeout(() => {
        navigate("/student/login");
      }, 1000);

    } catch (err) {
      const message = err.response?.data?.message || "Erro ao definir senha";
      alert(message);
      console.log(err);
    }
  };

  const handleObj = (e) => {
    const { name, value } = e.target;
    setDefinePassword({ ...definePasswordData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (Object.values(definePasswordData).some((field) => !field)) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    definePassword(definePasswordData);
  };

  return (
    <>
      <main>
        <form className={style.login} onSubmit={handleLogin}>
          <div className={style.headerLogin}>
            <h1>Defina Sua Senha</h1>
            <img src={logo} alt="" />
          </div>
          <div className={style.containerInputs}>
            <div>
              {/* <label htmlFor="matricula">Mátricula</label> */}
              <input
                type="text"
                name="matricula"
                className={style.input}
                placeholder="Sua Matrícula"
                value={definePasswordData.matricula}
                onChange={handleObj}
              />
            </div>
            <div>
              {/* <label htmlFor="oldPassword">Senha Antiga</label> */}
              <input
                type="password"
                name="oldPassword"
                className={style.input}
                placeholder="Senha Antiga"
                value={definePasswordData.oldPassword}
                onChange={handleObj}
              />
            </div>
            <div>
              {/* <label htmlFor="password">Nova senha</label> */}
              <input
                type="password"
                name="newPassword"
                className={style.input}
                placeholder="Nova Senha"
                value={definePasswordData.newPassword}
                onChange={handleObj}
              />
            </div>
          </div>
          <div className={style.containerBtn}>
            <button type="submit" className={style.btnLogin}>
              Definir
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
