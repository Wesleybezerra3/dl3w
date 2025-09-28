import React from "react";
import style from "./style.module.css";

export const Timetable = () => {
  return (
    <>
      <div className={style.containerTable}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.schedule}> 18:00 - 19:20</td>
              <td><p>Lógica de Programação</p> <p>Prof. Renata</p></td>
              <td>Banco de Dados - Prof. Igor</td>
              <td>Desenvolvimento Mobile - Prof. Italo</td>
              <td>Redes de Computadores - Prof. Josivan </td>
              <td>Back-End - Prof. Jorge</td>
            </tr>
            <tr>
              <td className={style.schedule}>19:20 - 20:10</td>
              <td>Lógica de Programação - Prof. Renata</td>
              <td>Banco de Dados - Prof. Igor</td>
              <td>Desenvolvimento Mobile - Prof. Italo</td>
              <td>Redes de Computadores - Prof. Josivan </td>
              <td>Back-End - Prof. Jorge</td>
            </tr>
            <tr>
              <td className={style.schedule}>20:20 - 21:10</td>
              <td>Lógica de Programação - Prof. Renata</td>
              <td>Banco de Dados - Prof. Igor</td>
              <td>Desenvolvimento Mobile - Prof. Italo</td>
              <td>Redes de Computadores - Prof. Josivan </td>
              <td>Back-End - Prof. Jorge</td>
            </tr>
            <tr>
              <td className={style.schedule}>21:10 - 22:00</td>
              <td>Lógica de Programação - Prof. Renata</td>
              <td>Banco de Dados - Prof. Igor</td>
              <td>Desenvolvimento Mobile - Prof. Italo</td>
              <td>Redes de Computadores - Prof. Josivan </td>
              <td>Back-End - Prof. Jorge</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
