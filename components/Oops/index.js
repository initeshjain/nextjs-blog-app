import Image from "next/image";
import Link from "next/link";
import styles from "./oops.module.css";

export default function Oops({ page, pageURI, svg = "/oops.svg" }) {
  return (
    <div className={styles.no_data_found}>
      <Image
        alt="Oops, there is nothing here!"
        src={svg}
        height={300}
        width={300}
      />
      <Link className={styles.view_all_button} href={pageURI}>
        Check out {page} page
      </Link>
    </div>
  );
}
