import React from "react";
import styles from "../CSS/home.module.css";
import praia from "../assets/praia.jpg";

const Home = () => {
  return (
    <div className={styles.outer_body}>
      <div className={styles.inner_body}>
        <p className={styles.text}>Venha vivenciar as MELHORES experiências da vida!</p>
        <div className={styles.inputs}>
          <input type="text" placeholder="Destino" className={styles.destino}/>          
          <div className={styles.container_date}>
            <input type="date" name="" id="" className={styles.date} />
            <button>Pesquisar</button>
          </div>
        </div>
      </div>
      ;<div></div>
    </div>
  );
};

export default Home;
