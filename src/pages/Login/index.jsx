import style from "./style.module.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import api from "../../services/api";

export const Login = () => {
  // const {role} = useAppContext();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    usuario: "",
    senha: "",
  });

  const handleObj = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const saveToken = (token) => {
      const expiration = Date.now() + 60 * 60 * 1000; // 1 hora (em ms)
      localStorage.setItem("token", token);
      localStorage.setItem("token_expiration", expiration.toString());
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if (Object.values(loginData).some((field) => !field)) {
        alert("Por favor, preencha todos os campos");
        return;
      }
  
      login(loginData).then(() => {
        setTimeout(() => {
          navigate("/adm/dashboard");
        }, 1000);
      });
    };
  
    const login = async (data) => {
      try {
        const response = await api.post("/adm/login", data, {
          headers: { "Content-Type": "application/json" },
        });
        const token = response.data.token;
  
        if (response.status !== 200) {
          throw new Error("Erro ao logar usuario");
        }
        if(localStorage.getItem("token")){
          localStorage.removeItem("token");
        }
        saveToken(token);
        console.log("Usuario logado com sucesso", response.data);
      } catch (err) {
        console.log("Erro ao logar usuario", err);
        return null;
      }
    };
  // useEffect(()=>{
  //   console.log(role);
  // },{})
  return (
    <>
      <main>
        <form className={style.login} onSubmit={handleLogin}>
          <div className={style.headerLogin}>
            <h1>Entre com sua conta</h1>
            <img src={logo} alt="" />
          </div>
          <div className={style.containerInputs}>
            <div>
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                name="usuario"
                className={style.input}
                placeholder="Seu Usuário"
                value={loginData.matricula}
                onChange={handleObj}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                className={style.input}
                placeholder="Sua Senha"
                value={loginData.senha}
                onChange={handleObj}
              />
            </div>
          </div>
          <div className={style.containerBtn}>
            <button type="submit" className={style.btnLogin}>
              Entrar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
