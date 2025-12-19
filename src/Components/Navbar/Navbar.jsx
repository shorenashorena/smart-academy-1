"use client";
import styles from "./Navbar.module.css";

const Navbar = ({ navList }) => {
  const handleClick = (element) => {};
  return (
    <div className={styles.navbar}>
      <div className={styles.elements}>
        {navList.map((element) => (
          <div key={element}>
            <button onClick={() => handleClick(element)} className={styles.btn}>
              {element}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
