import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <ul>
        <li>
          <Link href={"#"}>
            <Image src={"/home.png"} width={24} height={24} alt="logo" /> Home
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image src={"/collective.png"} width={24} height={24} alt="logo" />
            Collective<sub>SOON</sub>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image src={"/logo.png"} width={92} height={30} alt="logo" />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image src={"/analisty.png"} width={24} height={24} alt="logo" />
            Analytics<sub>SOON</sub>
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <Image src={"/feed.png"} width={24} height={24} alt="logo" />
            Feed
          </Link>
        </li>
      </ul>
    </div>
  );
}
