import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ landing, confirm }) {
  return (
    <>
      {confirm ? (
        <div className={styles.confirm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            style={{ width: "5rem", height: "5rem" }}
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <span>We got you covered! 🙌🏻</span>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/33f06496bd173814c310b8aa9d6177e5"
          className={styles.form}
          method="POST"
        >
          <div className={[styles.input_container, styles.ic1].join(" ")}>
            <input
              id="name"
              type="text"
              name="name"
              className={styles.input}
              placeholder=" "
              minLength={4}
              required
            />
            <div className={[styles.cut, styles.cut_name].join(" ")}></div>
            <label htmlFor="name" className={styles.placeholder}>
              Your name
            </label>
          </div>
          <div className={styles.input_container}>
            <input
              id="contact"
              name="contact"
              className={styles.input}
              type="text"
              placeholder=" "
              minLength={10}
              required
            />
            <div className={[styles.cut, styles.cut_contact].join(" ")}></div>
            <label htmlFor="contact" className={styles.placeholder}>
              Your Email
            </label>
          </div>
          <div className={styles.input_container}>
            <input
              id="desc"
              name="desc"
              className={styles.input}
              placeholder=" "
              required={false}
            />
            <div className={[styles.cut, styles.cut_desc].join(" ")}></div>
            <label htmlFor="desc" className={styles.placeholder}>
              Message
            </label>
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={landing} />
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
      )}
    </>
  );
}
