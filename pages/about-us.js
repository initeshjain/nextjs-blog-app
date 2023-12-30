import React from "react";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import Head from "next/head";

export default function AboutUs() {
  return (
    <div className={styles.main_div}>
      <Head>
        <title>About Us | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta property="og:url" content="https://www.tiktook.in/about-us" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="About Us | tiktook.in - Tech blog: Latest trends & innovations"
        />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      <h1>About Us</h1>
      <main>
        <p>
          Welcome to <Link href="https://www.tiktook.in">TikTook.in</Link>, your
          ultimate destination for the latest news and trends in science and
          technology. Based in India, our digital platform is dedicated to
          keeping you informed about the cutting-edge innovations and
          breakthroughs happening in various fields.
        </p>

        <p>
          At <Link href="https://www.tiktook.in">TikTook.in</Link>, we firmly
          believe that knowledge empowers individuals, and our mission is to
          provide valuable insights to our readers. Our team of passionate
          writers and editors is committed to delivering accurate, informative,
          and engaging content on all things science and technology.
        </p>

        <p>
          We understand that staying updated with the fast-paced world of
          technology can be overwhelming, and that&apos;s why we&apos;re here to
          simplify it for you. Our user-friendly website ensures you can easily
          access the most reliable and up-to-date information on the latest
          technological advancements worldwide.
        </p>

        <p>
          Whether you&apos;re a tech enthusiast or simply eager to stay informed
          about the latest trends, TikTook.in has something for everyone. Our
          diverse range of content caters to various interests, making learning
          about science and technology a delightful experience.
        </p>

        <p>
          Thank you for visiting{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link>, and we hope you
          enjoy our website.
        </p>

        <p>
          Thank you for being a part of TikTook.in&apos;s journey. We are
          thrilled to have you here, and we hope our website becomes your go-to
          source for all things related to science and technology. Should you
          wish to get in touch with us, please visit our{" "}
          <Link href="/contact-us">Contact Us</Link> page.
        </p>
        <p>
          Additionally, don&apos;t forget to explore our insightful{" "}
          <Link href="/blogs">blogs</Link> page for even more enriching content.
          We are committed to continuously improving and enhancing your
          experience on TikTook.in. Happy reading!
        </p>
      </main>
    </div>
  );
}
