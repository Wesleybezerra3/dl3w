import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../../assets/logo2.png";

// PALETA DA PLATAFORMA
const primary = "#325EA1";
const grayLight = "#F7F8FA";
const gray = "#6C757D";
const dark = "#1A1A1A";
const border = "#DDE2E5";

export const TeacherReport = ({ teacher }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontSize: 11.5,
      backgroundColor: "#FFFFFF",
      fontFamily: "Helvetica",
      color: dark,
    },

    // HEADER
    header: {
      alignItems: "center",
      marginBottom: 30,
      paddingBottom: 15,
      borderBottom: `2px solid ${primary}`,
    },
    logo: {
      width: 90,
      marginBottom: 8,
    },
    reportTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: primary,
      marginBottom: 2,
    },
    reportSubtitle: {
      fontSize: 11,
      color: gray,
    },

    // SECTION HEADER
    sectionTitle: {
      fontSize: 14,
      color: primary,
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: 18,
    },

    // CARD
    card: {
      backgroundColor: grayLight,
      padding: 14,
      borderRadius: 6,
      border: `1px solid ${border}`,
    },

    row: {
      flexDirection: "row",
      marginBottom: 6,
    },
    label: {
      width: 150,
      fontWeight: "bold",
      color: dark,
    },
    value: {
      color: gray,
    },
    
    disciplinaBox: {
    marginBottom: 10
  },

    divider: {
      marginVertical: 8,
      height: 1,
      backgroundColor: border,
    },

    // FOOTER
    footer: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 9,
      color: gray,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.reportTitle}>
            Relatório Individual do professor
          </Text>
          <Text style={styles.reportSubtitle}>
            Documento gerado automaticamente pelo sistema DL3W
          </Text>
        </View>

        {/* DADOS PESSOAIS */}
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{teacher.nome}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Matrícula:</Text>
            <Text style={styles.value}>{teacher.matricula}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.value}>{teacher.cpf}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.value}>{teacher.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Nascimento:</Text>
            <Text style={styles.value}>{teacher.data_nascimento}</Text>
          </View>
        </View>

        {/* ACADÊMICO */}
        <Text style={styles.sectionTitle}>Disciplinas Atribuídas</Text>

        <View style={styles.card}>
          {/* Caso não tenha disciplinas */}
          {teacher?.disciplinas?.length === 0 && (
            <Text style={styles.noData}>Nenhuma disciplina atribuída.</Text>
          )}

          {/* Lista de disciplinas */}
          {teacher?.disciplinas?.map((disciplina, index) => (
            <View key={index} style={styles.disciplinaBox}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.value}>{disciplina.nome}</Text>

              <Text style={styles.label}>Carga Horária:</Text>
              <Text style={styles.value}>{disciplina.carga_horaria}h</Text>

              <Text style={styles.label}>Código:</Text>
              <Text style={styles.value}>{disciplina.codigo || "—"}</Text>

              {index !== teacher.disciplinas.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>

        {/* RESUMO */}
        {/* <Text style={styles.sectionTitle}>Resumo Acadêmico</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Frequência Geral:</Text>
            <Text style={styles.value}>—</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Média Geral:</Text>
            <Text style={styles.value}>—</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Disciplinas Cursadas:</Text>
            <Text style={styles.value}>—</Text>
          </View>
        </View> */}

        <Text style={styles.footer}>
          DL3W • Sistema Acadêmico — {new Date().toLocaleDateString()}
        </Text>
      </Page>
    </Document>
  );
};
