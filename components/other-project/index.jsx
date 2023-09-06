import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function OtherProject() {
  return (
    <div className={styles.otherProjectContainer}>
      <h1>Look at Other Project</h1>
      <div className={styles.OtherProjectBoxs}>
        <div className={styles.leftBox}>
          <div>
            <input type="text" placeholder="Search" />
            <div>
              <Image
                src={"/sliders.png"}
                alt="sliders"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className={styles.leftBoxCard}>
            <Image
              src={"/creatorCard.png"}
              alt="creatorCard"
              width={126}
              height={126}
            />
            <div className={styles.leftBoxCardInfo}>
              <h4>ETH Never Die</h4>
              <span>
                Creator .{" "}
                <span>
                  <b>Roger Waters</b>
                </span>
              </span>{" "}
              <span>
                18 in stock{" "}
                <span>
                  1.5{" "}
                  <Image src={"/eth.png"} alt="eth" width={16} height={16} />
                </span>
              </span>
              <button>Mint</button>
            </div>
          </div>
          <div className={styles.leftBoxCard}>
            <Image
              src={"/creatorCard.png"}
              alt="creatorCard"
              width={126}
              height={126}
            />
            <div className={styles.leftBoxCardInfo}>
              <h4>ETH Never Die</h4>
              <span>
                Creator .{" "}
                <span>
                  <b>Roger Waters</b>
                </span>
              </span>{" "}
              <span>
                18 in stock{" "}
                <span>
                  1.5{" "}
                  <Image src={"/eth.png"} alt="eth" width={16} height={16} />
                </span>
              </span>
              <button>Mint</button>
            </div>
          </div>
          <div className={styles.leftBoxCard}>
            <Image
              src={"/creatorCard.png"}
              alt="creatorCard"
              width={126}
              height={126}
            />
            <div className={styles.leftBoxCardInfo}>
              <h4>ETH Never Die</h4>
              <span>
                Creator .{" "}
                <span>
                  <b>Roger Waters</b>
                </span>
              </span>{" "}
              <span>
                18 in stock{" "}
                <span>
                  1.5{" "}
                  <Image src={"/eth.png"} alt="eth" width={16} height={16} />
                </span>
              </span>
              <button>Mint</button>
            </div>
          </div>
        </div>
        <div className={styles.leftCenter}>center box</div>
        <div className={styles.leftRight}>right box</div>
      </div>
    </div>
  );
}
