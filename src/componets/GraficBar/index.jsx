import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { curso: 'ADS', alunos: 1200 },
  { curso: 'Direito', alunos: 900 },
  { curso: 'Eng. Civil', alunos: 700 },
  { curso: 'Administração', alunos: 500 },
  { curso: 'Pedagogia', alunos: 800 },
  { curso: 'Enfermagem', alunos: 650 },
  { curso: 'Psicologia', alunos: 400 },
  { curso: 'Arquitetura', alunos: 350 },
  { curso: 'Biomedicina', alunos: 300 },
  { curso: 'Educação Física', alunos: 250 },
  { curso: 'Nutrição', alunos: 200 },
];

export function GraficoDeBarras() {
  return (
    <ResponsiveContainer width="100%" height={500}>
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="curso" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alunos" fill="#325EA1" radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
