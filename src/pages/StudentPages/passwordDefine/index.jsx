import style from "./style.module.css";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

export const PasswordDefine = () => {
  // const {role} = useAppContext();
  const navigate = useNavigate();

  const [definePasswordData, setDefinePassword] = useState({
    matricula: "",
    password: "",
    confirmPassword: "",
  });

  const handleObj = (e) => {
    const { name, value } = e.target;
    setDefinePassword({ ...definePasswordData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (definePasswordData.matricula && definePasswordData.password && definePasswordData.confirmPassword) {
        if(definePasswordData.password !== definePasswordData.confirmPassword){
            alert("As senhas não coincidem!");
            return;
        }
      navigate("/student/login");
    }
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
              <label htmlFor="matricula">Mátricula</label>
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
              <label htmlFor="password">senha</label>
              <input
                type="password"
                name="password"
                className={style.input}
                placeholder="Sua Senha"
                value={definePasswordData.password}
                onChange={handleObj}
              />
            </div>
             <div>
              <label htmlFor="confirmPassword">Confirme sua senha</label>
              <input
                type="password"
                name="confirmPassword"
                className={style.input}
                placeholder="Confirme Sua Senha"
                value={definePasswordData.confirmPassword}
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
