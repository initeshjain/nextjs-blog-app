import React, { useState } from "react";
import CreateMarkup from "@/components/CreateMarkup";
import styles from "./slug.module.css";
import Head from "next/head";
import Oops from "@/components/Oops";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { useRouter } from "next/router";
// import Suggestions from "@/components/Suggestions";
import SidePosts from "@/components/SidePosts";
// import { AddComment, GetComments } from "@/components/Comments";
import { convertToLocalTime } from "@/components/Common";
import Script from "next/script";
import { InFeed } from "@/components/Ads";

function BlogItem({ blogData }) {
  const router = useRouter();
  // const [hasUpdated, setHasUpdated] = useState(0);

  // const getDate = (dateString) => {
  //   let options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   let date = new Date(dateString);
  //   return date.toLocaleDateString("en-US", options);
  // };
  // if (blogData === null) {
  //   return <Oops page="blogs" pageURI="/blogs" />;
  // }

  let pageTitle = `${blogData.title} | TikTook.in`;

  return (
    <div className={styles.data_main_container}>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta property="og:image" content={blogData?.header_image} />
        <meta
          property="og:url"
          content={`https://www.tiktook.in/blogs/${blogData?.slug}`}
        />
        <meta charSet="UTF-8" />
        <meta name="description" content={blogData.metadata} />
        <meta name="keywords" content={blogData?.keywords} />
        <meta name="author" content="tiktook.in" />
      </Head>
      {/* <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6342595909134126"
        crossorigin="anonymous"
      /> */}

      <div className={styles.two_cols}>
        {/* <InFeed /> */}
        <div className={styles.first_col}>
          <div className={styles.header_image_container}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={blogData?.title}
              src={blogData?.header_image}
              className={styles.header_image}
            />
          </div>

          <h1 className={styles.title}>{blogData?.title}</h1>
          <div className={styles.sub_container}>
            <h6 className={styles.date}>
              {convertToLocalTime(blogData?.updatedAt)}
            </h6>
            {/* <div>
                <div className={styles.category_tag}>
                  <Link
                    href={`/blogs/?categories=${blogData.category}`}
                    target="_blank"
                  >
                    #{blogData.category}
                  </Link>
                </div>
              </div> */}
            <div className={styles.share}>
              <ShareButtons url={router.asPath} title={blogData?.title} />
            </div>
          </div>

          <main className={styles.text_container}>
            {/* <div className={styles.cite_metadesc}>
              <q>
                <cite>{blogData?.metadesc}</cite>
              </q>
            </div>
            <hr /> */}
            <div
              className={styles.description}
              dangerouslySetInnerHTML={CreateMarkup(blogData?.content)}
            ></div>
          </main>
          {blogData?.link !== "" && (
            <div className={styles.target_link}>
              <Link href={blogData?.link} target="_blank">
                {blogData?.link_text}
              </Link>
            </div>
          )}
          {/* <hr /> */}
        </div>
        <div className={styles.second_col}>
          <SidePosts />
          {/* <div className={styles.ad_placeholder}>
            <ins
              className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-6342595909134126"
              data-ad-slot="4846461282"
            ></ins>
            <Script id="native-ad-unit">
              {`
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}
            </Script>
          </div>
          <div className={styles.ad_placeholder}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6342595909134126"
              data-ad-slot="6371295943"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id="ad-unit-2">
              {`(adsbygoogle = window.adsbygoogle || []).push({})`}
            </Script>
          </div>
          <div className={styles.web_only_ad_placeholder}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6342595909134126"
              data-ad-slot="1595166319"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id="ad-unit-web-only">{`(adsbygoogle = window.adsbygoogle || []).push({})`}</Script>
          </div>
          <div className={styles.web_only_ad_placeholder}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6342595909134126"
              data-ad-slot="6032419988"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id="vertical-1">
              {`(adsbygoogle = window.adsbygoogle || []).push({})`}
            </Script>
          </div>
          <div className={styles.web_only_ad_placeholder}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6342595909134126"
              data-ad-slot="6032419988"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <Script id="vertical-1">
              {`(adsbygoogle = window.adsbygoogle || []).push({})`}
            </Script>
          </div> */}
        </div>
      </div>
      {/* <section className={styles.two_cols}>
        <div className={styles.first_col}>
          <GetComments blogId={blogData._id} hasUpdated={hasUpdated} />
        </div>
        <div className={styles.next_col}>
          <AddComment
            blogId={blogData._id}
            setHasUpdated={setHasUpdated}
            slug={blogData.slug}
          />
        </div>
      </section> */}
      {/* <div className={styles.suggestion_box}>
        <Suggestions page="blog" />
      </div> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getPost?slug=${slug}`
  );

  let blogData = await res.json();
  return {
    props: { blogData },
  };
}

export default BlogItem;
