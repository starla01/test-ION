import React from "react";
//Estilos
import styles from "./index.module.sass";

//Constantes
const DATA = [
  {
    image: "/images/auto.jpg",
    title: "Auto",
    text: "Mis Logros",
    time: "2m",
    amount: "$350,000.00",
  },
  {
    image: "/images/cfe.jpg",
    title: "CFE",
    text: "Pago de servicio",
    time: "Ayer",
    amount: "$280.00",
  },
  {
    image: "/images/netflix.jpg",
    title: "NETFLIX",
    text: "Suscripciones",
    time: "28 de dic",
    amount: "$140.00",
  },
  {
    image: "/images/soriana.jpg",
    title: "Soriana Parque Delta",
    text: "Compras con tdc",
    time: "26 de dic",
    amount: "$3,800.00",
  },
  {
    image: "/images/auto.jpg",
    title: "Auto",
    text: "Mis Logros",
    time: "2m",
    amount: "$350,000.00",
  },
  {
    image: "/images/cfe.jpg",
    title: "CFE",
    text: "Pago de servicio",
    time: "Ayer",
    amount: "$280.00",
  },
  {
    image: "/images/netflix.jpg",
    title: "NETFLIX",
    text: "Suscripciones",
    time: "28 de dic",
    amount: "$140.00",
  },
  {
    image: "/images/soriana.jpg",
    title: "Soriana Parque Delta",
    text: "Compras con tdc",
    time: "26 de dic",
    amount: "$3,800.00",
  },
];

export default function Movements() {
  return (
    <div className={styles.movements}>
      <div className={styles.header}>
        <h2>Tus movimientos</h2>
        <a href="/disposition">Ver todos</a>
      </div>
      <div className={styles.listMovements}>
        {DATA.map(({ image, title, text, time, amount }) => {
          return (
            <div className={styles.movement}>
              <div className={styles.photo}>
                <img src={image} alt="" />
              </div>
              <div className={styles.data}>
                <div className={styles.titles}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.text}>{text}</p>
                </div>
                <div className={styles.qtys}>
                  <p className={styles.text}>{time}</p>
                  <p className={styles.title}>{amount}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
