import style from "./style.module.css";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import api from "../../../services/api";
import {CardNotifications} from "../../../componets/Cards/CardNotifications";
import { Load } from "../../../componets/Loards/load";
import { Eye, EyeClosed } from "lucide-react";

export const LoginTeacher = () => {
  // const {role} = useAppContext();

  const {setNotificationMessage,setResetKey, setTypeNotification} = useAppContext();
  const [load, setLoad] = useState(false)
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    matricula: "",
    senha: "",
  });

  const handleObj = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const saveToken = (token) => {
    const expiration = Date.now() + 60 * 60 * 1000; // 1 hora (em ms)

    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("token_expiration");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("token_expiration", expiration.toString());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (Object.values(loginData).some((field) => !field)) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    await login(loginData);
  };

  const login = async (data) => {
    try {
    setLoad(true)
      const response = await api.post("/professores/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      const token = response.data.token;
      const message = response.data.message

      if (response.status !== 200) {
        throw new Error("Erro ao logar usuario");
      }
      saveToken(token);

      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("s")
      console.log("Usuario logado com sucesso", response.data);

      setTimeout(() => {
        navigate("/teacher/plataform");
      }, 2000);
    } catch (err) {
      const message = err.response.data.message
      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("e")
      console.log("Erro ao logar usuario", err);
      return null;
    }finally{
      setLoad(false)
    }
  };

  return (
    <>
      <main>
        {/* <CardNotification text={textNotification} resetKey={resetKey} /> */}
        <form className={style.login} onSubmit={handleLogin}>
          <div className={style.headerLogin}>
            <h1>Entre com sua conta</h1>
            <img src={logo} alt="" />
          </div>
          <div className={style.containerInputs}>
            <div>
              <label htmlFor="matricula">Matrícula</label>
              <input
                type="text"
                name="matricula"
                className={style.input}
                placeholder="Sua Matrícula"
                value={loginData.matricula}
                onChange={handleObj}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
                 <div className={style.passwordContainer}>
                <span
                  className={style.viewPassword}
                  onClick={() => {
                    setViewPassword((prev) => !prev);
                  }}
                >
                  {!viewPassword ? <EyeClosed /> : <Eye />}
                </span>
                <input
                  type={!viewPassword ? "password" : "text"}
                  name="senha"
                  className={style.input}
                  placeholder="Sua Senha"
                  value={loginData.senha}
                  onChange={handleObj}
                />
                
              </div>
            </div>
          </div>
          <div className={style.containerBtn}>
            <button type="submit" className={style.btnLogin}>
              <Load visible={load}/>
              {load?'':'Entrar'}
            </button>
            <div className={style.containerLink}>
              <Link
                to="/student/definir-senha"
                className={style.definePassword}
              >
                Definir minha senha
              </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
