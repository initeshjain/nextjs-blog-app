/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Suggestions.module.css";
import Link from "next/link";

export default function Suggestions({ page }) {
  const [items, setItems] = useState([]);
  const fetchSuggestions = async () => {
    let res = await fetch(`/api/getSuggestions?For=${page}`);
    let data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return (
    <>
      <div className={styles.suggestion_container}>
        <h2 className={styles.heading}>You may also like</h2>
        {items.map((ele, index) => {
          return (
            <div className={styles.link_container} key={index}>
              <Link href={ele?.slug} rel="internal" title={ele?.title}>
                <div className={styles.link_text}>
                  {ele?.title}{" "}
                  {ele?.discount && (
                    <span className={styles.discount}>{ele?.discount} Off</span>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
