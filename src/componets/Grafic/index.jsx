import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { nome: 'Janeiro', alunos: 400 },
  { nome: 'Fevereiro', alunos: 300 },
  { nome: 'Março', alunos: 500 },
  { nome: 'Abril', alunos: 200 },
  { nome: 'Maio', alunos: 400 },
  { nome: 'Junho', alunos: 50 },

];

export function GraficoDeLinhas() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
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
