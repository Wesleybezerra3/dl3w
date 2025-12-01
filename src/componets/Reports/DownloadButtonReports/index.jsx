import { PDFDownloadLink } from "@react-pdf/renderer";
import { FileText } from "lucide-react";
import style from "./style.module.css";

export const DownloadPDFReports = ({ name, document, title }) => {
  return (
    <PDFDownloadLink
      document={document}
      fileName={`relatorio-${name}.pdf`}
      style={{ textDecoration: "none" }} // remove underline padrão
    >
      <button className={style.btnDownload}>
        <div className={style.iconWrapper}>
          <FileText className={style.icon} />
        </div>

        <p className={style.label}>{title}</p>
      </button>
    </PDFDownloadLink>
  );
};
