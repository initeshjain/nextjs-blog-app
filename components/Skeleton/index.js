import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton({ boxesCount=5 }) {
  let counter = Array.from({ length: boxesCount }, () => "skeleton");
  return (
    <>
      {counter.map((s) => {
        return (
          <>
            <div className={styles.skeleton}>
              <div className={styles.skeleton_child}></div>
              <div className={styles.skeleton_card_footer}>
                <div className={styles.skeleton_footer_child}></div>
                <div className={styles.skeleton_footer_child}></div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
