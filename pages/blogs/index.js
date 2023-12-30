import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./blogs.module.css";
// import Categories from "@/components/Categories";
import BlogCard from "@/components/Cards/BlogCard";
import Searchbar from "@/components/Searchbar";
import ComeBackLater from "@/components/ComeBackLater";
import BlogPostSkeleton from "@/components/Skeleton/BlogPostSkeleton";
import { InFeed } from "@/components/Ads";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [categories, setCategories] = useState([]);

  // flag to show hide filter menu in mobile screen
  // const [showCategories, setShowCategories] = useState(false);

  const observerRef = useRef(null);

  useEffect(() => {
    // async function fetchCats() {
    //   let cats = await fetch(
    //     `${process.env.NEXT_PUBLIC_HOST}/api/catFilter?page=blogs`
    //   );
    //   cats = await cats.json();
    //   setCategories(cats.distinct_categories);
    // }
    // fetchCats();
    fetchData();
  }, []);

  useEffect(() => {
    if (observerRef.current && hasMore) {
      const observer = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && !fetchingData) {
          await fetchMoreData();
        }
      });
      observer.observe(observerRef.current);
      return () => observer.disconnect();
    }
  }, [observerRef, hasMore, fetchingData]);

  // useEffect(() => {
  //   setHasMore(true);
  //   setPage(1);
  // }, [selectedCategories]);

  const fetchMoreData = async () => {
    if (fetchingData) {
      return;
    }
    setLoading(true);
    setFetchingData(true);
    let res = await fetch(
      `/api/getPosts?offset=${page * 12
      }&limit=${12}&search=${searchText}&page=blogs`
    );
    let data = await res.json();
    if (data.length == 0) {
      setHasMore(false);
    } else {
      setBlogs(blogs.concat(data));
      setPage(page + 1);
    }
    setLoading(false);
    setFetchingData(false);
  };

  const fetchData = async () => {
    setBlogs([]);
    setLoading(true);
    setFetchingData(true);
    let res = await fetch(`/api/getPosts?search=${searchText}&page=blogs`);
    let data = await res.json();
    if (data.length == 0) {
      setHasMore(false);
    } else {
      setBlogs(data);
      setPage(1);
    }
    setLoading(false);
    setFetchingData(false);
  };

  return (
    <>
      <Head>
        <title>Blogs | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta property="og:url" content="https://www.tiktook.in/blogs" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Blogs | TikTook.in - All well-curated technical blogs | your one stop solution"
        />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>

      {/* <div className={styles.sidebar_and_section}> */}

      {/* <Categories
          className={styles.filter}
          distinct_categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          fetchFunc={() => fetchData()}
          page="blogs"
          showCategories={showCategories}
          setShowCategories={setShowCategories}
        /> */}

      <section className={styles.section}>
        <Searchbar
          searchText={searchText}
          setSearchText={setSearchText}
          fetchFunc={() => fetchData()}
          className={styles.searchbar_container}
        />
        {/* <InFeed /> */}
        {blogs.length === 0 && !loading && !fetchingData && (
          <ComeBackLater
            msg="No blogs found!"
            searchText={searchText}
          // selectedCategories={selectedCategories}
          />
        )}
        <div className={styles.card_container}>
          {blogs.map((item, index) => {
            if (index === blogs.length - 1) {
              return (
                <BlogCard observRef={observerRef} key={item._id} item={item} />
              );
            } else {
              return <BlogCard key={item._id} item={item} />;
            }
          })}
        </div>
        {hasMore && loading && (
          <div className={styles.loading}>
            <BlogPostSkeleton />
          </div>
        )}
      </section>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { categories, search } = context.query;

//   let searchText = "";
//   if (search) {
//     searchText = search;
//   }

//   let cat = "";
//   if (categories) {
//     cat = categories;
//   }

//   let res = await fetch(
//     `${process.env.NEXT_PUBLIC_HOST}/api/catFilter?categories=${cat}&search=${searchText}&page=blogs`
//   );
//   let data = await res.json();

//   res = await fetch(
//     `${process.env.NEXT_PUBLIC_HOST}/api/getPosts?offset=0
//     &limit=10&categories=${data.selected_categories.join(
//       "|"
//     )}&search=${searchText}&page=blogs`
//   );

//   let firstChunk = await res.json();

//   return {
//     props: {
//       distinct_categories: data.distinct_categories,
//       selected_categories: data.selected_categories,
//       search: data.search,
//       firstChunk: firstChunk,
//     },
//   };
// }

export default Blogs;
