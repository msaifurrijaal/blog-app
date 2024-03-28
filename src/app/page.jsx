import Image from "next/image";
import heroImage from "../../public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis amet
          sequi facere voluptas aperiam minus.
        </p>
        <Button url="/" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={heroImage} alt="" className={styles.img}></Image>
      </div>
    </div>
  );
}
