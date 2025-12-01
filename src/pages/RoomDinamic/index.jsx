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
  SwitchCamera,
  ToggleLeft,
} from "lucide-react";
import { Load } from "../../componets/Loards/load";
import { ChangeClass } from "../../componets/Modals/StudentActions/ChangeClass";
import { ChangeCourse } from "../../componets/Modals/StudentActions/ChangeCourse";
import { ChangeSituacion } from "../../componets/Modals/StudentActions/ChangeSituation";
import { ChangePassword } from "../../componets/Modals/StudentActions/ChangePassword";
import { DownloadPDF } from "../../componets/Reports/DownloadButton";
import { StudentReport } from "../../componets/Reports/StudentReport";

export const RoomDinamic = () => {
  const {
    setNotificationMessage,
    setResetKey,
    setTypeNotification,
    refresh,
    refreshKey,
    setVisibleLoad,
  } = useAppContext();
  const [load, setLoad] = useState(false);
  const [resumeSelect, setResumeSelect] = useState('1');
  const [isOpenT, setIsOpenT] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenP, setIsOpenP] = useState(false);

  const { name } = useParams();
  const [isEdit, setIsEdit] = useState(true);
  const [room, setRoom] = useState(null);

  const [formData, setFormData] = useState({
    nome: "",
    localizacao:'',
    capacidade:'',
  });

  useEffect(() => {
    if (room) {
      setFormData({
        nome: room.nome || "",
        localizacao: room.localizacao || "",
        capacidade: room.capacidade || '',
      });
    }
  }, [refreshKey, room]);

  const handleObj = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const getStudent = async () => {
      try {
        setVisibleLoad(true)
        console.log(name)
        const response = await api.get("/salas/getByName", {
          params: {name:name},
        });
        const data = response.data;
        const message = response.data.message;
        setRoom(data);

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
      }finally{
        setVisibleLoad(false)
      }
    };

    getStudent();
  }, [refreshKey]);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (!formData) {
        return;
      }
      setLoad(true);
      const response = await api.put("/salas", formData, {
        params: { id: room.id },
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
      {/* <ChangeClass
        visible={isOpenT}
        onClose={() => setIsOpenT(false)}
        currentClass={student?.turma?.nome}
        id={student?.turma?.curso?.id}
        matricula={matricula}
      />
      <ChangeCourse
        visible={isOpenC}
        onClose={() => setIsOpenC(false)}
        currentCourse={student?.turma?.curso?.nome}
        matricula={matricula}
      />
      <ChangeSituacion
        visible={isOpenS}
        onClose={() => setIsOpenS(false)}
        currentSituacao={student?.situacao}
        matricula={matricula}
      />
      <ChangePassword
        visible={isOpenP}
        onClose={() => setIsOpenP(false)}
        matricula={matricula}
      /> */}

      <section className="container">
        <section className={style.info}>
          <div className={style.headerInfo}>
            <h1>Informações pessoais</h1>
            <div style={{display:'flex', gap:'1em'}}>
              <button
                type="button"
                onClick={() => {
                  setIsEdit((prev) => !prev);
                }}
              >
                <Edit />
              </button>
              {/* <DownloadPDF name={matricula} document={<StudentReport student={student} />} /> */}
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
                    <label htmlFor="data">Localização</label>
                    <input
                      type="text"
                      name="localizacao"
                      onChange={handleObj}
                      value={formData.localizacao}
                      disabled={isEdit}
                    />
                    <label htmlFor="cpf">Capacidade</label>
                    <input
                      type="text"
                      name="capacidade"
                      onChange={handleObj}
                      value={formData.capacidade}
                      disabled={isEdit}
                    />
                  </div>
                  {/* <div className={style.containerInput}>
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
                  {/* </div>  */}
                </div>
                  <div className={style.containerBtn}>
            <button
              type="button"
              className={style.btnC}
              disabled={isEdit}
              onClick={() => {
                setFormData(room);
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
            {/* <div className={style.containerActions}>
              <h1>Ações</h1>
              <div className={style.actions}>
                <article
                  className={style.cardActions}
                  onClick={() => {
                    setIsOpenT(true);
                  }}
                >
                  <div>
                    <Replace className={style.icon} />
                  </div>
                  <div>Mudar Turma</div>
                </article>
                <article
                  className={style.cardActions}
                  onClick={() => {
                    setIsOpenC(true);
                  }}
                >
                  <div>
                    <GraduationCapIcon className={style.icon} />
                    <ArrowLeftRight className={style.icon} />
                  </div>
                  <div>Mudar Curso</div>
                </article>
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
            </div> */}
          </div>
        
        </section>

        {/* <section className={style.containerInfoAca}>
          <div className={style.card}>
            <div>
              <h1>Informações academicas</h1>
            </div>
            <div className={style.containerInfos}>
              <div className={style.infos}>
                <p>Curso</p>
                <p>{student?.turma?.curso?.nome}</p>
              </div>
              <div className={style.infos}>
                <p>Turno</p>
                <p>{student?.turma?.turno}</p>
              </div>

              <div className={style.infos}>
                <p>Semestre/Periodo</p>
                <p>{student?.turma?.semestre}</p>
              </div>

              <div className={style.infos}>
                <p>Situação</p>
                <p
                  style={{
                    color: student?.situacao === "ativo" ? "green" : "red",
                  }}
                >
                  {student?.situacao}
                </p>
              </div>
              <div className={style.infos}>
                <p>Turma</p>
                <p>{student?.turma?.nome}</p>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.headerResume}>
              <h1>Resumo</h1>
              <div className={style.resumeBtns}>
                <button  className={`${style.btnResume} ${resumeSelect === '1'? style.select:style.disabled}`} onClick={()=>setResumeSelect('1')}>Presença</button>

                <button className={`${style.btnResume} ${resumeSelect === '2'? style.select:style.disabled}`} onClick={()=>setResumeSelect('2')}>Nota</button>
              </div>
            </div>

            <div>
              <p>Nenhum resumo disponivel</p>
            </div>
          </div>
        </section> */}
      </section>
    </>
  );
};
