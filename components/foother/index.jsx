import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div style={{ background: "var(--dark-1, #1E1E1E)", padding: " 48px 0px" }}>
      <div className={styles.footerContainer}>
        <div>
          <Image src={"/logo.png"} alt="logo" width={121} height={40} />
          <h3>777 Sense Labs © 2022</h3>
          <p>Ste 1200, 1309 Coffeen Avenue Sheridan, US, 82801</p>
        </div>
        <div>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Feed</li>
            <li>Foundation</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Image src={"/Instagram.png"} alt=" " width={20} height={20} />
              Instagram
            </li>
            <li>
              <Image src={"/Twitter.png"} alt=" " width={20} height={20} />
              Twitter
            </li>
            <li>
              <Image src={"/Discord.png"} alt=" " width={20} height={20} />
              Discord
            </li>
            <li>
              <Image src={"/Medium.png"} alt=" " width={20} height={20} />
              Medium
            </li>
          </ul>
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
