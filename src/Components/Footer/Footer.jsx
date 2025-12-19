"use client";
import styles from "./Footer.module.css";

const Footer = ({ footList }) => {
  const handleClick = (social) => {};
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        {footList.map((social) => (
          <div key={social}>
            <button onClick={() => handleClick(social)} className={styles.btn}>
              {social}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
