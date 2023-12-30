/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Comments.module.css";
import { CommentDateTime } from "@/components/Common";

function GetComments({ blogId, hasUpdated }) {
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getComments?blogId=${blogId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          setResMsg("Some error occurred 😢");
        } else {
          setComments(data.response);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    fetchComments();
  }, [hasUpdated]);

  return (
    <div className={styles.comments_container}>
      <h2 className={styles.heading}>Comments</h2>
      {comments &&
        comments.length > 0 &&
        comments?.map((comment, index) => {
          return (
            <div key={index} className={styles.comment}>
              <div className={styles.user_detail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.icon}
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className={styles.user}>
                  <p>{comment.userName}</p>
                  <span>{CommentDateTime(comment.created_at)}</span>
                </div>
              </div>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      {comments.length === 0 && (
        <p>
          Join the conversation and share your thoughts! Leave the first
          comment.
        </p>
      )}
    </div>
  );
}

export default GetComments;
