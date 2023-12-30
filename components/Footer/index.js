import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.main_container}>
        {/* main container */}
        <div className={styles.brand_container}>
          {/* brand container */}
          <h3>tiktook.in</h3>
          <span>Stay informed and inspired with our tech blog site, exploring the latest trends, innovations, and insights from the world of technology.</span>
        </div>
        <div className={styles.links_container}>
          <div className={styles.links}>
            {/* links 3 */}
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link target="_blank" href="/sitemap.xml">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.sub_footer}>
        {/* sub footer */}
        <div className={styles.copyright}>
          {/* copyright line */}© 2023 TikTook.in — All Rights Reserved
        </div>
      </div>
    </div>
  );
}
