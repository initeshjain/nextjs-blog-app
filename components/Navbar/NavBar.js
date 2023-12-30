import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">🔥 tiktook.in</Link>
      </nav>
    </>
  );
}

export default NavBar;
