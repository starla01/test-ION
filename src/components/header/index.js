//Estilos
import styles from "./index.module.sass";

//componentes
import AvailableBalance from "../../components/AvailableBalance";
import Menu from "../../components/Menu";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.profile}>
        <div className={styles.name}>
          <span>Hola José</span>
          <img
            className={styles.photo}
            src="/images/profile.png"
            alt="profile"
          />
        </div>
      </div>
      <AvailableBalance />
      <Menu />
    </div>
  );
}
