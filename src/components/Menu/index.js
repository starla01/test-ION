//Estilos
import styles from "./index.module.sass";

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.ctonainerIcons}>
        <div className={styles.logo}>
          <span className="material-icons">grade</span>
          <span className={styles.labelLogo}>Crear Logro</span>
        </div>
        <div className={styles.logo}>
          <span className="material-icons">sell</span>
          <span className={styles.labelLogo}>Pagar servicio</span>
        </div>
        <div className={styles.logo}>
          <span className="material-icons">notifications</span>
          <span className={styles.labelLogo}>Suscripción</span>
        </div>
      </div>
    </div>
  );
}
