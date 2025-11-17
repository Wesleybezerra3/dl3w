import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { abbreviateCourse } from "../../utils/abbreviations";
import { useEffect, useState } from "react";
import api from "../../services/api";

// const data = [
//   { curso: 'Análise e desenvolvimento de sistemas', alunos: 1200 },
//   { curso: 'Direito', alunos: 900 },
//   { curso: 'Eng. Civil', alunos: 700 },
//   { curso: 'Administração', alunos: 500 },
//   { curso: 'Pedagogia', alunos: 800 },
//   { curso: 'Enfermagem', alunos: 650 },
//   { curso: 'Psicologia', alunos: 400 },
//   { curso: 'Arquitetura', alunos: 350 },
//   { curso: 'Biomedicina', alunos: 300 },
//   { curso: 'Educação Física', alunos: 250 },
//   { curso: 'Nutrição', alunos: 200 },
// ];

export function GraficoDeBarras() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStudentsByCourse = async () => {
      try {
        const response = await api.get("/cursos/alunos_por_curso");
        const studentsByCourse = response.data;
        const newData = studentsByCourse.map((courseData) => ({
          curso: courseData.nome,
          alunos: courseData.total_alunos,
        }));

        setData(newData);
        console.log("Student data by course:", newData);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    getStudentsByCourse();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="curso"
          // tickFormatter={(value) => abbreviateCourse(value)}
        />
        <YAxis />
        <Tooltip labelFormatter={(label) => `Curso: ${label}`} />
        <Legend />
        <Bar dataKey="alunos" fill="#325EA1" radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
