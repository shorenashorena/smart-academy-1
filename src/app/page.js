import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
export default function Home() {
  const navList = ["Home", "About", "Contact", "Cart"];
  const footList = ["Facebook", "Linkedin", "Viber", "YouTube", "Email"];
  return (
    <div className={styles.page}>
      <Navbar navList={navList} />
      <Footer footList={footList} />
    </div>
  );
}
