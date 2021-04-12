//Estilos
import styles from "./index.module.sass";

//Componentes
import Header from "../../components/header";
import PaymentDetails from "../../components/PaymentDetails";
import Movements from "../../components/Movements";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.paymentDetails}>
        <PaymentDetails />
      </div>
      <Movements />
      <Nav />
    </div>
  );
}
