import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Addbtn } from "../../componets/ui/Addbtn";
import { CardCourse } from "../../componets/Cards/CardCourse";
import { useAppContext } from "../../context/AppContext";

export const Courses = () => {
  const { courses } = useAppContext();
  const [search, setSearch] = useState("");

  const filtered = courses?.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='container'>
      <div className={style.header}>
        <p>Cursos</p>

        <div className={style.searchWrapper}>
          <input
            type="text"
            placeholder="Buscar curso..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Addbtn text={"+ Novo Curso"} />
      </div>

      <div className={style.list}>
        {filtered?.length > 0 ? (
          filtered.map((course) => (
            <CardCourse
              key={course.id}
              name={course.nome}
              description={course.descricao}
              totalSubjects={course.disciplinas?.length || 0}
            />
          ))
        ) : (
          <p className={style.empty}>Nenhum curso encontrado</p>
        )}
      </div>
    </section>
  );
};
