import React, { useState } from "react";
import styles from "./Comments.module.css";

function AddComment({ blogId, slug, setHasUpdated }) {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [resMsg, setResMsg] = useState("");

  const PostComment = () => {
    if (userName.trim().length !== 0 && comment.trim().length !== 0) {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/postComment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, comment, blogId, slug }),
      })
        .then((response) => {
          if (response.error) {
            setResMsg("Some error occurred 😢");
          } else {
            setResMsg("Posted 🙌🏻. Refresh the page to see it!");
            setUserName("");
            setComment("");
          }
          setHasUpdated((prev) => prev + 1);
        })
        .catch((err) => setResMsg("Some error occurred 😢"));
    } else {
      setResMsg("Name and comment field should not be blank.");
    }
  };

  return (
    <div>
      <h2 className={styles.heading}>Post a comment</h2>
      <div className={styles.comment_input}>
        <label htmlFor="name">Your name:</label>
        <input
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name"
          maxLength={50}
          minLength={3}
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          rows={5}
          name="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment"
          maxLength={1000}
          minLength={10}
        />
        {resMsg && <span>{resMsg}</span>}
        <button onClick={() => PostComment()} type="submit">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
