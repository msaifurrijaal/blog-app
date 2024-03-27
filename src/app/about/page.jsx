import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Our Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            quisquam quod quibusdam quo, sed hic quaerat alias cum quis nam
            aspernatur id consequatur modi voluptatibus obcaecati quas accusamus
            est. Veniam ullam tenetur doloribus, architecto, impedit dolores
            culpa, tempore blanditiis ipsa officiis voluptate dolorum
            distinctio! Amet quis accusantium eveniet illo nihil.
            <br />
            Optio autemsunt id magnam ipsam omnis sapiente dicta beatae iusto
            voluptatum maiores nulla earum placeat dolorem fugiat
            exercitationem! Sed quis minima ipsa, laborum veritatis magnam
            ducimus libero, dolor eius deleniti maiores praesentium, laudantium
            possimus quidem officiis aut impedit dicta dignissimos numquam
            labore adipisci inventore odio explicabo. Dignissimos, laudantium
            eius.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
