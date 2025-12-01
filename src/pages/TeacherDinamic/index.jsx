import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import {
  ArrowLeftRight,
  AwardIcon,
  Edit,
  GraduationCapIcon,
  KeyRound,
  Replace,
  SquarePlusIcon,
  SwitchCamera,
  ToggleLeft,
} from "lucide-react";
import { Load } from "../../componets/Loards/load";
import { DownloadPDF } from "../../componets/Reports/DownloadButton";
import { TeacherReport } from "../../componets/Reports/TeacherReport";
import { NewSubject } from "../../componets/Modals/TeacherActions/AddSubject";
import { ChangeSituacionTeacher } from "../../componets/Modals/TeacherActions/ChangeSituation";
import { ChangePasswordTeacher } from "../../componets/Modals/TeacherActions/ChangePassword";

export const TeacherDinamic = () => {
  const {
    setNotificationMessage,
    setResetKey,
    setTypeNotification,
    refresh,
    refreshKey,
    setVisibleLoad
  } = useAppContext();
  const [load, setLoad] = useState(false);
  const [resumeSelect, setResumeSelect] = useState("1");
  const [isOpenT, setIsOpenT] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenP, setIsOpenP] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);


  const { matricula } = useParams();
  const [isEdit, setIsEdit] = useState(true);
  const [teacher, setteacher] = useState(null);

  const [formData, setFormData] = useState({
    nome: "",
    data_nascimento: "",
    cpf: "",
    email: "",
    titulacao: "",
  });

  useEffect(() => {
    if (teacher) {
      setFormData({
        nome: teacher.nome || "",
        data_nascimento: teacher.data_nascimento || "",
        cpf: teacher.cpf || "",
        email: teacher.email || "",
        titulacao: teacher.titulacao || "",
      });
    }
  }, [refreshKey, teacher]);

  const handleObj = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const getTeacher = async () => {
      try {
        setVisibleLoad(true)
        const response = await api.get("/professores/getByMatricula", {
          params: { matricula },
        });
        const data = response.data;
        const message = response.data.message;
        setteacher(data);

        setNotificationMessage(message);
        setResetKey((prev) => prev + 1);
        setTypeNotification("s");
        console.log("professor:", data);
      } catch (err) {
        const message = err.response.data.message;
        setNotificationMessage(message);
        setResetKey((prev) => prev + 1);
        setTypeNotification("e");
        console.log(err);
      }finally{
        setVisibleLoad(false)
      }
    };

    getTeacher();
  }, [refreshKey]);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (!formData) {
        return;
      }
      setLoad(true);
      const response = await api.put("/professores", formData, {
        params: { matricula },
      });
      console.log(response.data.message);
      const message = response.data.message;

      setNotificationMessage(message);
      setResetKey((prev) => prev + 1);
      setTypeNotification("s");
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
      <ChangeSituacionTeacher
        visible={isOpenS}
        onClose={() => setIsOpenS(false)}
        currentSituacao={teacher?.situacao}
        matricula={matricula}
      />
      <ChangePasswordTeacher
        visible={isOpenP}
        onClose={() => setIsOpenP(false)}
        matricula={matricula}
      />
      <NewSubject visible={isOpenAdd} onClose={()=> setIsOpenAdd(false)} teacherDisciplines={teacher?.disciplinas} id_professor={teacher?.id}/>

      <section className="container">
        <section className={style.info}>
          <div className={style.headerInfo}>
            <h1>Informações pessoais</h1>
            <div>
              <p
                style={{
                  color: teacher?.situacao === "ativo" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {teacher?.situacao}
              </p>
            </div>
            <div style={{ display: "flex", gap: "1em" }}>
              <button
                type="button"
                onClick={() => {
                  setIsEdit((prev) => !prev);
                }}
              >
                <Edit />
              </button>
               <DownloadPDF name={matricula} document={<TeacherReport teacher={teacher} />} /> 
            </div>
          </div>
          <div className={style.content}>
            <div>
              <form onSubmit={handleForm}>
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
                    <label htmlFor="titulacao">Titulacão</label>
                    <input
                      type="text"
                      name="titulacao"
                      onChange={handleObj}
                      value={formData.titulacao}
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
                      setFormData(teacher);
                      setIsEdit(true);
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
            </div>
            <div className={style.containerActions}>
              <h1>Ações</h1>
              <div className={style.actions}>
                <article
                  className={style.cardActions}
                  onClick={() => {
                    setIsOpenS(true);
                  }}
                >
                  <div>
                    <ToggleLeft className={style.icon} />
                  </div>
                  <div>Alterar Situação</div>
                </article>
                <article
                  className={style.cardActions}
                  onClick={() => {
                    setIsOpenP(true);
                  }}
                >
                  <div>
                    <KeyRound className={style.icon} />
                  </div>
                  <div>Resetar Senha</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={style.containerDisciplinas}>
          <div className={style.headerDisciplinas}>
            <h1>Disciplinas Atribuídas</h1>
            <button onClick={()=> setIsOpenAdd(true)}>
                <SquarePlusIcon/>
            </button>
          </div>

          <div className={style.containerCardsDisciplinas}>
            {teacher?.disciplinas?.length > 0 ? (
              teacher.disciplinas.map((disciplina) => (
                <article
                  className={style.cardDisciplina}
                  key={disciplina.id}
                  title={disciplina.nome}
                >
                  <div className={style.iconContainer}>
                    <GraduationCapIcon size={26} />
                  </div>

                  <div className={style.infoDisciplina}>
                    <p className={style.nomeDisciplina}>{disciplina.nome}</p>
                    <span className={style.carga}>
                      Carga horária: {disciplina.carga_horaria}h
                    </span>
                  </div>
                </article>
              ))
            ) : (
              <p style={{ color: "#777" }}>Nenhuma disciplina atribuída.</p>
            )}
          </div>
        </section>
      </section>
    </>
  );
};
