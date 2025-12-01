import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { abbreviateCourse } from "../../utils/abbreviations";
import { useEffect, useState } from "react";
import api from "../../services/api";

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
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    getStudentsByCourse();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 5, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

        <XAxis
          dataKey="curso"
          tickFormatter={(value) => abbreviateCourse(value)}
          tick={{ fontSize: 12, fill: "#555" }}
        />

        <YAxis tick={{ fontSize: 12, fill: "#555" }} />

        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "14px",
          }}
          labelStyle={{ fontWeight: "bold", color: "#333" }}
          formatter={(value) => [`${value} alunos`, "Total"]}
          labelFormatter={(label) => `Curso: ${label}`}
        />

        <Bar
          dataKey="alunos"
          fill="var(--primary-color, #325EA1)"
          radius={[2, 2, 0, 0]}
          barSize={100}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
