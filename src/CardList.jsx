import React from 'react';
import Card from './Card';
import styles from "./app.module.css"

function CardList({ colors }) {
  return (
    <div className={styles.colorList}>
      {colors.map((color, index) => (
        <Card key={index} name={color.name} hexCode={color.hexCode} />
      ))}
    </div>
  );
}

export default CardList;
