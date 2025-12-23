"use client";
import Image from "next/image";
import styles from "./DeletedItems.module.css";

const DeletedItems = ({ products }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.DeletedItems}>
      <h2>Deleted Items</h2>

      {products.map((item) => (
        <div className={styles.itemWrapper} key={item.id}>
          <Image
            src={item.image}
            width={100}
            height={80}
            style={{ objectFit: "contain" }}
            alt={item.title}
          />
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeletedItems;
