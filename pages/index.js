import Head from "next/head";
import Blogs from "./blogs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>tiktook.in</title>
        <meta
          name="description"
          content="Your one stop solution. Nicely written tech blogs that suits your needs. Make every moment learning something new. Happy learning!!"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="g9kn6K3hQICP_cOKLy49cPlE_nTsyYFEYb0P6V9EUNo"
        />
        <meta property="og:url" content="https://www.tiktook.in" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      {/* <main> */}
      <Hero />
      <Blogs />
      {/* </main> */}
    </>
  );
}
