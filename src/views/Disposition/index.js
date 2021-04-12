//Estilos
import styles from "./index.module.sass";

//Componentes
import AvailableBalance from "../../components/AvailableBalance";

export default function Disposition() {
  return (
    <div className={styles.disposition}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.actions}>
            <a href="/">
              <span class="material-icons">west</span>
            </a>
            <a href="/">CANCELAR</a>
          </div>
          <h1>Disposición</h1>
        </div>
        <div className={styles.availableBalanceDetail}>
          <p className={styles.labelAmount}>TIENES DISPONIBLE</p>
          <h2 className={styles.amount}>$1,499,970.00</h2>
        </div>
        <div className={styles.containerActions}>
          <div className={styles.ctaName}>Auto</div>
          <div className={styles.ctaName}>$350,000.00</div>
        </div>
        <div className={styles.title}>Selecciona tu plazo</div>
        <div className={styles.circularCntrl}>
          <div className={styles.rings}>
            <div className={styles.data}>
              <p className={styles.month}>Tu pago mensual</p>
              <h2>$12,000.00</h2>
              <p className={styles.fee}>a 60 meses</p>
              <p className={styles.int}>
                Tasa de interes <br /> 16.6%
              </p>
            </div>
            <div class="percent1">
              <svg>
                <circle
                  className={styles.primary}
                  cx="110"
                  cy="90"
                  r="110"
                ></circle>
                <circle
                  className={styles.secondary}
                  cx="110"
                  cy="90"
                  r="110"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.ctaLike}>LO QUIERO</div>
      </div>
    </div>
  );
}
