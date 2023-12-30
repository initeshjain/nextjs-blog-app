import React from "react";
import Link from "next/link";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import { convertToLocalTime } from "@/components/Common";

export default function BlogCard({ item, observRef }) {
  return (
    <div ref={observRef} className={styles.item_container}>
      <div className={styles.aligner}>
        <Link passHref={true} href={`blogs/${item.slug}`}>
          <div className={styles.image_container}>
            <Image
              alt={item.title}
              src={item.header_image}
              className={styles.header_image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              loading="lazy"
              as="image"
            />
          </div>
          <div className={styles.spacer}></div>
        </Link>
        <div className={styles.text_details}>
          <div>
            <Link passHref={true} href={`blogs/${item.slug}`}>
              <h5>{item.title}</h5>
            </Link>
            <div className={styles.datetimestamp}>
              {convertToLocalTime(item.updatedAt)}
            </div>
            <p className={styles.description}>
              {item.metadesc?.slice(0, 100)}
              ...
            </p>
          </div>
          <Link passHref={true} href={`blogs/${item.slug}`}>
            <button className={styles.read_now_button} role="button">
              Know more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
