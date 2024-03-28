import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <Link href={`/blog/test`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title Test</h1>
          <p className={styles.desc}>Desc Test</p>
        </div>
      </Link>
      <Link href={`/blog/test`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title Test</h1>
          <p className={styles.desc}>Desc Test</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
