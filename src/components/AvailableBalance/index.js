//Estilos
import styles from "./index.module.sass";

export default function AvailableBalance() {
  return (
    <div className={styles.availableBalance}>
      <p className={styles.labelAmount}>SALDO DISPONIBLE</p>
      <h2 className={styles.amount}>$1,499,970.00</h2>
    </div>
  );
}
