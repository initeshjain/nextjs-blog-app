import React from "react";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Disclaimer() {
  return (
    <div className={styles.main_div}>
      <Head>
        <title>Disclaimer | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta property="og:url" content="https://www.tiktook.in/disclaimer" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Disclaimer | tiktook.in - Tech blog: Latest trends & innovations"
        />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      <h1>Disclaimer</h1>
      <main>
        <p>
          Welcome to <Link href="https://www.tiktook.in">TikTook.in</Link>. This
          disclaimer outlines the limitations of liability and disclaims
          warranties for the use of our website.
        </p>

        <p>
          <b>Content:</b> Information on{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> is for general
          informational purposes only. We make no warranties or representations
          regarding its completeness, accuracy, reliability, suitability, or
          availability. Use the information at your own risk.
        </p>

        <p>
          <b>Limitation of Liability:</b>{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> and its owners,
          affiliates, employees, agents, and licensors shall not be liable for
          any damages arising from the use or inability to use our website.
        </p>

        <p>
          <b>No Legal or Professional Advice:</b> Content on{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> is not a
          substitute for professional or legal advice. Consult with a
          professional or seek legal advice before acting on any information
          provided.
        </p>

        <p>
          <b>External Links:</b>{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> may contain
          links to external websites. We do not endorse or guarantee the
          accuracy of information on these sites, and we are not responsible for
          their content or practices.
        </p>

        <p>
          <b>Changes:</b> We reserve the right to modify this disclaimer without
          prior notice.
        </p>

        <p>
          By using <Link href="https://www.tiktook.in">TikTook.in</Link>, you
          agree to this disclaimer. If you don&apos;t agree, please do not use
          our website.
        </p>

        <p>
          For any questions or concerns about this disclaimer, contact us
          through our website&apos;s <Link href="/contact-us">Contact Us</Link>{" "}
          page.
        </p>
      </main>
    </div>
  );
}
