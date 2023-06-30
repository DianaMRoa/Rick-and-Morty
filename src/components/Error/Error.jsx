import React from "react";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();

    const handleGoToForm = () => {
      navigate("/home");
     
    }; 
  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <h1 className={styles["card-title"]}>
          Error 404: Página no encontrada
        </h1>
        <p className={styles["card-text"]}>
          Lo siento, la página que busca no existe.
        </p>
        <button className={styles["card-button"]} onClick={handleGoToForm}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
}

export default Error;