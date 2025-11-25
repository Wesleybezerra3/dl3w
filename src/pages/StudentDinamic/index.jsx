import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { Edit } from "lucide-react";

export const StudentDinamic = () => {
  const { setNotificationMessage, setResetKey, setTypeNotification } =
    useAppContext();
  const { matricula } = useParams();
  const [isEdit, setIsEdit] = useState(true);
  const [student, setStudent] = useState(null);

  const [formData, setFormData] = useState({
    nome: "",

    data_nascimento: "",
    cpf: "",
    email: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        nome: student.nome || "",
        data_nascimento: student.data_nascimento || "",
        cpf: student.cpf || "",
        email: student.email || "",
      });
    }
  }, [student]);

  const handleObj = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const getStudent = async () => {
      console.log(typeof matricula);
      try {
        const response = await api.get("/alunos/getByMatricula", {
          params: { matricula },
        });
        const data = response.data;
        const message = response.data.message;
        setStudent(data);

        setNotificationMessage(message);
        setResetKey((prev) => prev + 1);
        setTypeNotification("s");
        console.log("aluno:", data);
      } catch (err) {
        const message = err.response.data.message;
        setNotificationMessage(message);
        setResetKey((prev) => prev + 1);
        setTypeNotification("e");
        console.log(err);
      }
    };

    getStudent();
  }, []);

  return (
    <>
      <section className="container">
        <section className={style.info}>
          <div className={style.headerInfo}>
            <h1>Informações pessoais</h1>
            <button onClick={()=>{
                setIsEdit(prev => !prev)
            }}>
              <Edit />
            </button>
          </div>
          <div className={style.containerInfo}>
            <div className={style.containerInput}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleObj}
                disabled={isEdit}
              />

              <label htmlFor="data">Data de nascimento</label>
              <input
                type="text"
                name="
                data_nascimento"
                value={formData.data_nascimento}
                disabled={isEdit}
              />
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                disabled={isEdit}
              />
            </div>

            <div className={style.containerInput}>
              <label htmlFor="matricula">Matrícula</label>
              <input type="text" name="matricula" value={matricula} disabled />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled={isEdit}
              />
              {/* <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefone" /> */}
            </div>
          </div>
          <div className={style.containerBtn}>
            <button className={style.btnC} disabled={isEdit}>
              Cancelar
            </button>
            <button className={style.btn} disabled={isEdit}>
              Salvar
            </button>
          </div>
        </section>

        <h1>{matricula}</h1>
      </section>
    </>
  );
};
