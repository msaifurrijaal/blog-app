import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Metaweb. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          height={20}
          width={20}
          className={styles.icon}
          alt="Metaweb Facebook"
        />
        <Image
          src="/2.png"
          height={20}
          width={20}
          className={styles.icon}
          alt="Metaweb Instagram"
        />
        <Image
          src="/3.png"
          height={20}
          width={20}
          className={styles.icon}
          alt="Metaweb Twitter"
        />
        <Image
          src="/4.png"
          height={20}
          width={20}
          className={styles.icon}
          alt="Metaweb Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
