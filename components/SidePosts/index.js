import React, { useState, useEffect } from "react";
import styles from "./SidePosts.module.css";
import Link from "next/link";
// import { convertToLocalTime } from "@/components/Common";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";

export default function SidePosts() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const FetchPosts = async (e) => {
    e && e.preventDefault();
    setIsLoading(true);
    try {
      let data = await (
        await fetch(`/api/searchRecentBlogs?query=${query}`)
      ).json();
      setPosts(data);
    } catch (e) {
      setPosts([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    FetchPosts();
  }, []);

  const Card = ({ post }) => {
    return (
      <div className={styles.card}>
        <Image
          src={post.header_image}
          alt={post.title}
          width={100}
          height={100}
          className={styles.header_image}
        ></Image>
        <div className={styles.text_container}>
          <Link href={post.slug}>
            <h4 className={styles.title}>{post.title}</h4>
          </Link>
          <div className={styles.card_footer}>
            <span>{post.metadesc.slice(0, 80)}...</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2 className={styles.section_heading}>Search posts</h2>
      <form className={styles.form} onSubmit={FetchPosts}>
        <input
          type="search"
          value={query}
          className={styles.searchbox}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button className={styles.btn}>Search</button>
      </form>
      <div>
        {!isLoading && posts.length === 0 && (
          <div className={styles.no_data_msg}>Better luck next time</div>
        )}
        {!isLoading ? (
          posts.map((post, index) => {
            return <Card key={index} post={post} />;
          })
        ) : (
          <Skeleton />
        )}
      </div>
    </>
  );
}
