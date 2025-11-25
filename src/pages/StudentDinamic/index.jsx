import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { AwardIcon, Edit } from "lucide-react";
import { Load } from "../../componets/Loards/load";

export const StudentDinamic = () => {
  const { setNotificationMessage, setResetKey, setTypeNotification, refresh } =
    useAppContext();
  const [load, setLoad] = useState(false);

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

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (!formData) {
        return;
      }
      setLoad(true);
      const response = await api.put("/alunos", formData, {
        params: { matricula },
      });
      console.log(response.data.message);
      const message = response.data.message;

      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("s");
      refresh();
    } catch (err) {
      console.log(err);

      const message = err.response.data.message;
      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("e");
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <section className="container">
        <section className={style.info}>
          <form onSubmit={handleForm}>
            <div className={style.headerInfo}>
              <h1>Informações pessoais</h1>
              <button
                type="button"
                onClick={() => {
                  setIsEdit((prev) => !prev);
                }}
              >
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
                  autoComplete="false"
                />

                <label htmlFor="data">Data de nascimento</label>
                <input
                  type="date"
                  name="data_nascimento"
                  onChange={handleObj}
                  value={formData.data_nascimento}
                  disabled={isEdit}
                />
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  name="cpf"
                  onChange={handleObj}
                  value={formData.cpf}
                  disabled={isEdit}
                />
              </div>

              <div className={style.containerInput}>
                <label htmlFor="matricula">Matrícula</label>
                <input
                  type="text"
                  name="matricula"
                  value={matricula}
                  disabled
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleObj}
                  value={formData.email}
                  disabled={isEdit}
                />
                {/* <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefone" /> */}
              </div>
            </div>
            <div className={style.containerBtn}>
              <button
                type="button"
                className={style.btnC}
                disabled={isEdit}
                onClick={() => {
                  setFormData(student);
                  setIsEdit(true)
                }}
              >
                Cancelar
              </button>
              <button type="submit" className={style.btn} disabled={isEdit}>
                <Load visible={load} />
                {load ? "" : "Salvar"}
              </button>
            </div>
          </form>
  
        </section>

        <section className={style.containerInfoAca}>
           <div className={style.card}> 
            <div>
              <h1>
                Informações academicas
              </h1>
            </div>
            <div className={style.containerInfos}>
              
                <div className={style.infos}>
                  <p>
                    Curso
                  </p>
                  <p>
                    {student?.turma?.curso?.nome}
                  </p>
                </div>
                <div className={style.infos}>
                  <p>
                    Turno
                  </p>
                  <p>
                    {student?.turma?.turno}
                  </p>
                </div>

                  <div className={style.infos}>
                  <p>
                    Semestre/Periodo
                  </p>
                  <p>
                    {student?.turma?.semestre}
                  </p>
                </div>

                  <div className={style.infos}>
                  <p>
                    Situação
                  </p>
                  <p style={{color: student?.situacao ==='ativo'?'green':"red"}}>
                    {student?.situacao}
                  </p>
                </div>
                  <div className={style.infos}>
                  <p>
                    Turma
                  </p>
                  <p>
                    {student?.turma?.nome}
                  </p>
                </div>
            </div>
           </div>
           <div className={style.card}>
            <div>
              <h1>Resumo</h1>
            </div>
            <div>
              <button>
                Presença
              </button>

              <button>
                Nota
              </button>
            </div>
           </div>
        </section>
      </section>
    </>
  );
};
