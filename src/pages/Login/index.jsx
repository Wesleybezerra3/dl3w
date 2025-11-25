import style from "./style.module.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import api from "../../services/api";
import { Load } from "../../componets/Loards/load";
import { Eye, EyeClosed } from "lucide-react";

export const Login = () => {
  // const {role} = useAppContext();

  const [load, setLoad] = useState(false);
  const { setNotificationMessage, setResetKey, setTypeNotification } =
    useAppContext();
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    usuario: "",
    senha: "",
  });

  const login = async (data) => {
    try {
      setLoad(true);
      const response = await api.post("/adm/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      const token = response.data.token;
      const message = response.data.message;

      if (response.status !== 200) {
        throw new Error("Erro ao logar usuario");
      }
      saveToken(token);

      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("s");

      setTimeout(() => {
        navigate("/adm/dashboard");
      }, 2000);
    } catch (err) {
      const message = err.response.data.message;
      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("e");
      console.log("Erro ao logar usuario", err);
      return null;
    } finally {
      setLoad(false);
    }
  };

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

    login(loginData);
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
              <Load visible={load} />
              {load ? "" : "Entrar"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
