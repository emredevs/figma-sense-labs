import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Project() {
  return (
    <>
      <h1
        style={{
          width: "15%",
          marginLeft: "13%",
        }}
      >
        Project
      </h1>
      <div className={styles.projectContainer}>
        <div className={styles.imageDiv}>
          <Image src={"/Image.png"} alt="image" width={609} height={609} />
        </div>

        <div className={styles.projectInfo}>
          <h1>Great NFT Project</h1>
          <div className={styles.userInfo}>
            <div>
              <Image src={"/Avatar.png"} alt="user" width={48} height={48} />
              <div>
                <span>Creator</span>
                <b>Eric Clapton</b>
              </div>
            </div>
            <button>Mint</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar sollicitudin dui. Sed pulvinar sollicitudin dui ac
            ullamcorper. Mauris interdum lobortis commodo. Etiam tellus justo,
            ultricies et arcu quis, vehicula scelerisque turpis. Nunc mi ante,
            sagittis vitae imperdiet quis, scelerisque ac nulla. Maecenas enim
            urna, ullamcorper sed erat.
          </p>
          <div className={styles.card}>
            <div>
              <h5>Mint Price</h5>
              <h1>2.00 ETH</h1>
              <h4>$3,102.76</h4>
            </div>

            <h5>Mint Starting in</h5>
            <div className={styles.timeBox}>
              <span>
                <b>19</b>
                <samp>hrs</samp>
              </span>
              <span>
                <b>26</b>
                <samp>min</samp>
              </span>
              <span>
                <b>48</b>
                <samp>sec</samp>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
