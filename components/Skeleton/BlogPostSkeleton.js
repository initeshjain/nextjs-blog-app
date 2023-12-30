import React from "react";
import styles from "./Skeleton.module.css";

export default function BlogPostSkeleton({ boxesCount = 3 }) {
  let counter = Array.from({ length: boxesCount }, () => "skeleton");
  return (
    <>
      {counter.map((s) => {
        return (
          <>
            <div className={styles.skeleton_blog_post}>
              <div className={styles.skeleton_image}></div>
              <div className={styles.skeleton_footer}>
                <div className={styles.skeleton_child}></div>
                <div className={styles.skeleton_date}></div>
                <div className={styles.skeleton_desc}></div>
                <div className={styles.skeleton_btn}></div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
