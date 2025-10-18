import style from "./style.module.css";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

export const LoginStudent = () => {
  // const {role} = useAppContext();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    matricula: "",
    password: "",
  });

  const handleObj = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.matricula && loginData.password) {
      navigate("/student/plataform");
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
              <label htmlFor="text">Matrícula</label>
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
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                className={style.input}
                placeholder="Sua Senha"
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
