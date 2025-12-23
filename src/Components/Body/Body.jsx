"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import Button from "../Button/Button";
import DeletedItems from "../DeletedItems/DeletedItems";

const Body = () => {
  const [products, setProducts] = useState(null);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  if (products === null) {
    return <div>products are fetching</div>;
  }

  const handleDelete = (id) => {
    const deletedItem = products.find((item) => item.id === id);

    setDeletedProducts((prev) => [...prev, deletedItem]);
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className={styles.body}>
        {products.map((item) => (
          <div className={styles.itemWrapper} key={item.id}>
            <Image
              src={item.image}
              width={100}
              height={80}
              style={{ objectFit: "contain" }}
              alt="photos"
            />
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
              <Button
                title="delete"
                handleClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
        <DeletedItems products={deletedProducts} />
      </div>
    </>
  );
};

export default Body;
