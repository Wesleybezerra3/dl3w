import { PDFDownloadLink } from "@react-pdf/renderer";
import { StudentReport } from "../StudentReport";
import { FileText } from "lucide-react";

export const DownloadPDF = ({ name, document }) => {
  return (
    <PDFDownloadLink
      document={document} //<StudentReport student={student} />
      fileName={`relatorio-${name}.pdf`}
    >
      <button><FileText/></button>
    </PDFDownloadLink>
  );
};
