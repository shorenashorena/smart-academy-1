import Body from "@/Components/Body/Body";
import styles from "./page.module.css";
import Button from "@/Components/Button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Body />
      <Button />
    </div>
  );
}
