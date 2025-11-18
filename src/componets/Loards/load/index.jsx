import style from "./style.module.css";

export const Load = ({ visible }) => {
  return (
    <>
      <div
        className={style.three_body}
        style={{ display: !visible ? "none" : "flex" }}
      >
        <div className={style.three_body_dot}></div>
        <div className={style.three_body_dot}></div>
        <div className={style.three_body_dot}></div>
      </div>
      
    </>
  );
};
