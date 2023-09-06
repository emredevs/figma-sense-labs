import React from "react";
import styles from "./stles.module.css";
import Image from "next/image";
export default function CreatorCard() {
  return (
    <div className={styles.creatorContainer}>
      <h1>Creator’s Other Projects</h1>
      <div className={styles.creatorBox}>
        <div className={styles.creatorCard}>
          <Image src={"/creatorCard.png"} alt="card" width={221} height={221} />
          <h3>
            The Big Mac
            <span> 3 in stock</span>
          </h3>
          <span>
            Creator .{" "}
            <span>
              <b>Roger Waters</b>
            </span>
          </span>

          <div className={styles.creatorBtnBox}>
            <button>Mint</button>
            <div>
              1.5 <Image src={"/eth.png"} alt="eht" width={16} height={16} />
            </div>
          </div>
        </div>
        <div className={styles.creatorCard}>
          <Image src={"/creatorCard.png"} alt="card" width={221} height={221} />
          <h3>
            The Big Mac
            <span> 3 in stock</span>
          </h3>
          <span>
            Creator .{" "}
            <span>
              <b>Roger Waters</b>
            </span>
          </span>

          <div className={styles.creatorBtnBox}>
            <button>Mint</button>
            <div>
              1.5 <Image src={"/eth.png"} alt="eht" width={16} height={16} />
            </div>
          </div>
        </div>
        <div className={styles.creatorCard}>
          <Image src={"/creatorCard.png"} alt="card" width={221} height={221} />
          <h3>
            The Big Mac
            <span> 3 in stock</span>
          </h3>
          <span>
            Creator .{" "}
            <span>
              <b>Roger Waters</b>
            </span>
          </span>

          <div className={styles.creatorBtnBox}>
            <button>Mint</button>
            <div>
              1.5 <Image src={"/eth.png"} alt="eht" width={16} height={16} />
            </div>
          </div>
        </div>
        <div className={styles.creatorCard}>
          <Image src={"/creatorCard.png"} alt="card" width={221} height={221} />
          <h3>
            The Big Mac
            <span> 3 in stock</span>
          </h3>
          <span>
            Creator .{" "}
            <span>
              <b>Roger Waters</b>
            </span>
          </span>

          <div className={styles.creatorBtnBox}>
            <button>Mint</button>
            <div>
              1.5 <Image src={"/eth.png"} alt="eht" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
