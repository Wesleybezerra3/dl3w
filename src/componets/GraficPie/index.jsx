import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import api from "../../services/api";

export function GraficoDePizza() {
  const [data, setData] = useState([]);

  const getActive = async () => {
    try {
      const response = await api.get("/alunos/relatorios/active");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getInactive = async () => {
    try {
      const response = await api.get("/alunos/relatorios/inactive");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  const getActiveInactive = async () => {
    try {
      const active = await getActive();
      const inactive = await getInactive();

      console.log("ACTIVE RAW:", active);
      console.log("INACTIVE RAW:", inactive);

      setData([
        { name: "Ativos", value: active?.students?.length ?? 0 },
        { name: "Inativos", value: inactive?.students?.length ?? 0 },
      ]);
    } catch (error) {
      console.error("Erro ao buscar alunos ativos/inativos:", error);
    }
  };

  getActiveInactive();
}, []);

  const COLORS = ["#0A51BD", "#FF6C02"];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={90}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
