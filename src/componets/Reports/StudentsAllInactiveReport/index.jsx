import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../../../assets/logo2.png";

// Paleta de cores
const primary = "#325EA1";
const grayLight = "#F4F6F8";
const gray = "#6C757D";
const dark = "#1A1A1A";

// Estilos
const styles = StyleSheet.create({
  page: {
    padding: 25,
    backgroundColor: "#FFFFFF",
    fontSize: 11,
    fontFamily: "Helvetica",
  },

  // HEADER
  headerContainer: {
    backgroundColor: grayLight,
    padding: 18,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 65,
  },
  headerText: {
    color: primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },

  // TÍTULO SEÇÃO
  sectionTitle: {
    marginTop: 25,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: primary,
    borderLeft: `4px solid ${primary}`,
    paddingLeft: 6,
  },

  // TABELA
  tableHeader: {
    flexDirection: "row",
    backgroundColor: primary,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottom: `1px solid ${grayLight}`,
  },
  tableRowAlternate: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: grayLight,
    borderBottom: `1px solid ${grayLight}`,
  },
  cell: {
    width: "20%",
    fontSize: 10,
  },

  // RODAPÉ
  footer: {
    marginTop: 25,
    paddingTop: 10,
    borderTop: `2px solid ${primary}`,
    textAlign: "center",
    fontSize: 9,
    color: gray,
  },
});

// COMPONENTE PDF
export const StudentsAllInactiveReport = ({ students }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>

      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.headerText}>Relatório Geral de Alunos Inativos</Text>
      </View>

      {/* TÍTULO DA TABELA */}
      <Text style={styles.sectionTitle}>Listagem Completa</Text>

      {/* TABELA */}
      <View>
        {/* Cabeçalho */}
        <View style={styles.tableHeader}>
          <Text style={styles.cell}>Nome</Text>
          <Text style={styles.cell}>Matrícula</Text>
          <Text style={styles.cell}>Curso</Text>
          <Text style={styles.cell}>Turma</Text>
          <Text style={styles.cell}>Situação</Text>
        </View>

        {/* Linhas */}
        {students.map((student, index) => (
          <View
            key={index}
            style={index % 2 === 0 ? styles.tableRow : styles.tableRowAlternate}
          >
            <Text style={styles.cell}>{student?.nome}</Text>
            <Text style={styles.cell}>{student?.matricula}</Text>
            <Text style={styles.cell}>{student?.turma?.curso?.nome}</Text>
            <Text style={styles.cell}>{student?.turma?.nome}</Text>
            <Text style={styles.cell}>{student?.situacao}</Text>
          </View>
        ))}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text>
          DL3W • Sistema Educacional — Relatório gerado automaticamente em {new Date().toLocaleDateString()}
        </Text>
      </View>

    </Page>
  </Document>
);
