import React from "react";
import styles from "./Promotions.module.css"
import Link from "next/link"
import Image from "next/image";

export default function Promotions() {
  return (
    <div className={styles.promotions}>
        <Link
          className={styles.promo_container}
          href={"https://telegram.me/+bcITrc7FAENhYTU1"}
          target="_blank"
        >
          <Image
            className={styles.telegram_promo}
            src="/daily_offer_dose_promo.webp"
            alt="Telegram Channel - Great Offers and Deals - https://t.me/daily_offer_dose"
            fill
            loading="lazy"
            as="image"
          />
        </Link>
        <Link
          className={styles.promo_container}
          href={"https://t.me/fresco_play_answers_bot"}
          target="_blank"
        >
          <Image
            className={styles.telegram_promo}
            src="/fresco-promo.webp"
            alt="Telegram Bot - Fresco Play Answers - https://t.me/fresco_play_answers_bot"
            fill
            loading="lazy"
            as="image"
          />
        </Link>
      </div>
  )
}