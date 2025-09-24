import style from "./style.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleObj = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      navigate("/dashboard");
    }
  };
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
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                className={style.input}
                placeholder="Seu E-mail"
                value={loginData.email}
                onChange={handleObj}
              />
            </div>
            <div>
              <label htmlFor="email">Matrícula</label>
              <input
                type="password"
                name="password"
                className={style.input}
                placeholder="Sua matrícula"
                value={loginData.password}
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
