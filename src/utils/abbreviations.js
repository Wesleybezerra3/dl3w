export const COURSE_ABBREVIATIONS = {
  'Análise e desenvolvimento de sistemas': 'ADS',
  'Direito': 'Dir',
  'Eng. Civil': 'Eng. Civ.',
  'Administração': 'Adm',
  'Pedagogia': 'Ped',
  'Enfermagem': 'Enf',
  'Psicologia': 'Psic',
  'Arquitetura': 'Arq',
  'Biomedicina': 'Biomed',
  'Educação Física': 'Ed. Fís.',
  'Nutrição': 'Nut',
};

export function abbreviateCourse(fullName) {
  if (!fullName) return fullName;
  return COURSE_ABBREVIATIONS[fullName] || fullName;
}
