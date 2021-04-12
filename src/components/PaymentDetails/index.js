//Estilos
import styles from "./index.module.sass";

export default function PaymentDetails() {
  return (
    <div className={styles.paymentDetails}>
      <p className={styles.title}>Tu próximo pago</p>
      <p className={styles.payment}>$28.860.00</p>
      <div className={styles.actions}>
        <div className={styles.date}>
          <p className={styles.labelDate}>Fecha de pago</p>
          <p className={styles.dateValue}>16 Enero</p>
        </div>
        <div className={styles.ctaPayment}>Pagar ahora</div>
      </div>
      <div className={styles.achievements}>
        <div className={styles.label}>
          <img src="/images/budget.jpg" width="20" alt="achivements" />
          <span>Mis Logros</span>
        </div>
        <div className={styles.amount}>$27.260.00</div>
      </div>
      <div className={styles.purchases}>
        <div className={styles.label}>
          <img src="/images/tdc.jpg" width="20" alt="tdc" />
          <span>Compras con TDC</span>
        </div>
        <div className={styles.amount}>$27.260.00</div>
      </div>
    </div>
  );
}
