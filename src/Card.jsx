//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import React from 'react';
import styles from "./app.module.css"

function Card({ name, hexCode }) {
  return (
    <div className={styles.colorCard} style={{ backgroundColor: hexCode }}>
      <p>{name}</p>
      <p>{hexCode}</p>
    </div>
  );
}

export default Card;