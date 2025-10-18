import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { nome: 'Jan', alunos: 400 },
  { nome: 'Fev', alunos: 300 },
  { nome: 'Mar', alunos: 500 },
  { nome: 'Abr', alunos: 200 },
  { nome: 'Mai', alunos: 400 },
  { nome: 'Jun', alunos: 50 },
  { nome: 'Jul', alunos: 300 },
  { nome: 'Ago', alunos: 400 },
  { nome: 'Set', alunos: 600 },
  { nome: 'Out', alunos: 700 },
  { nome: 'Nov', alunos: 800 },
  { nome: 'Dez', alunos: 900 },

];

export function GraficoDeLinhas() {
  return (
    <ResponsiveContainer width="100%" height={500}>
       <LineChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nome" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="alunos" stroke="#2563eb" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
