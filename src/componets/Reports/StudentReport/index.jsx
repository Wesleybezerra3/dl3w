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

export const StudentReport = ({ student }) => {
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
          <Text style={styles.reportTitle}>Relatório Individual do Aluno</Text>
          <Text style={styles.reportSubtitle}>
            Documento gerado automaticamente pelo sistema DL3W
          </Text>
        </View>

        {/* DADOS PESSOAIS */}
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{student.nome}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Matrícula:</Text>
            <Text style={styles.value}>{student.matricula}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.value}>{student.cpf}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>E-mail:</Text>
            <Text style={styles.value}>{student.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Nascimento:</Text>
            <Text style={styles.value}>{student.data_nascimento}</Text>
          </View>
        </View>

        {/* ACADÊMICO */}
        <Text style={styles.sectionTitle}>Informações Acadêmicas</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label}>Curso:</Text>
            <Text style={styles.value}>{student?.turma?.curso?.nome}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Turma:</Text>
            <Text style={styles.value}>{student?.turma?.nome}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Turno:</Text>
            <Text style={styles.value}>{student?.turma?.turno}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Semestre:</Text>
            <Text style={styles.value}>{student?.turma?.semestre}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Situação:</Text>
            <Text style={styles.value}>{student.situacao}</Text>
          </View>
        </View>

        {/* RESUMO */}
        <Text style={styles.sectionTitle}>Resumo Acadêmico</Text>
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
        </View>

        <Text style={styles.footer}>
          DL3W • Sistema Acadêmico — {new Date().toLocaleDateString()}
        </Text>

      </Page>
    </Document>
  );
};
