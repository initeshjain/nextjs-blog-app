import React from "react";
import styles from "./Pagination.module.css";

const Icons = {
  DoubleLeftArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  ),

  DoubleRightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),

  SingleLeftArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  ),

  SingleRightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
};

function Pagination({ page = 1, HandlePageChange, totalPages }) {
  page = parseInt(page);
  totalPages = parseInt(totalPages);
  return (
    <div className={styles.main_div}>
      <div className={styles.pagination}>
        <button
          disabled={page <= 1}
          onClick={() => HandlePageChange(1)}
          className={styles.btn}
        >
          {Icons.DoubleLeftArrow}
        </button>
        <button
          onClick={() => HandlePageChange(page - 1)}
          disabled={page <= 1}
          className={styles.btn}
        >
          {Icons.SingleLeftArrow}
        </button>

        {page === 1 && (
          <>
            <button className={styles.active}>1</button>
            {totalPages >= 2 && (
              <button
                onClick={() => HandlePageChange(2)}
                className={styles.btn}
              >
                2
              </button>
            )}
            {totalPages >= 3 && (
              <button
                onClick={() => HandlePageChange(3)}
                className={styles.btn}
              >
                3
              </button>
            )}
          </>
        )}

        {page > 1 && page < totalPages && (
          <>
            <button
              onClick={() => HandlePageChange(page - 1)}
              className={styles.btn}
            >
              {page - 1}
            </button>
            <button className={styles.active}>{page}</button>
            <button
              onClick={() => HandlePageChange(page + 1)}
              className={styles.btn}
            >
              {page + 1}
            </button>
          </>
        )}

        {page >= totalPages && page !== 1 && (
          <>
            <button
              onClick={() => HandlePageChange(page - 2)}
              className={styles.btn}
            >
              {page - 2}
            </button>
            <button
              onClick={() => HandlePageChange(page - 1)}
              className={styles.btn}
            >
              {page - 1}
            </button>
            <button className={styles.active}>{page}</button>
          </>
        )}

        <button
          disabled={page >= totalPages}
          onClick={() => HandlePageChange(page + 1)}
          className={styles.btn}
        >
          {Icons.SingleRightArrow}
        </button>
        <button
          disabled={page >= totalPages}
          onClick={() => HandlePageChange(totalPages)}
          className={styles.btn}
        >
          {Icons.DoubleRightArrow}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
