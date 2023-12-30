import React, { useState, useEffect } from "react";
import { AmznCard } from "@/components/Cards";
import styles from "./Promotions.module.css";
import Link from "next/link";

export default function AmznPromotions() {
  const [items, setItems] = useState([]);
  const fetchPromotions = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/getPosts?page=deals&limit=3`
    );
    let data = await res.json();
    setItems(data.items);
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  return (
    <>
      <hr />
      <div className={styles.container}>
        <h3>Amazon Great Deals</h3>
        <Link className={styles.view_more_link} href="/amzn-deals">
          View More Offers
        </Link>
        <div className={styles.main_container}>
          {items &&
            items.map((item, index) => {
              return (
                <div key={index} className={styles.item_container}>
                  <AmznCard item={item} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
