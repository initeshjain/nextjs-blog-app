import React from "react";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className={styles.main_div}>
      <Head>
        <title>Privacy Policy | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta
          property="og:url"
          content="https://www.tiktook.in/privacy-policy"
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Privacy Policy | tiktook.in - Tech blog: Latest trends & innovations"
        />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      <h1>Privacy Policy</h1>
      <main>
        <p>
          At <Link href="https://www.tiktook.in">TikTook.in</Link>, we value
          your privacy and are dedicated to safeguarding your personal
          information. Our privacy policy explains how we collect, use, and
          disclose your data when you visit our website.
        </p>

        <p>
          <b>Information We Collect:</b> We do not collect any personally
          identifiable information from our website visitors. However, we may
          collect non-personally identifiable data, such as your IP address,
          browser type, and operating system, for analytical and statistical
          purposes.
        </p>

        <p>
          <b>Use of Cookies:</b>{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> uses cookies to
          enhance your browsing experience and gather non-personally
          identifiable information. Cookies are small text files placed on your
          device by our website.
        </p>

        <p>
          <b>Third-Party Services:</b> We utilize third-party services, like
          Google Analytics, to collect analytical data. These services may use
          cookies and tracking technologies to gather information about your
          website usage.
        </p>

        <p>
          <b>Information Sharing:</b> We do not share any personally
          identifiable information with third parties. However, non-personally
          identifiable data may be shared with service providers to improve our
          website and services.
        </p>

        <p>
          <b>Data Security:</b> We employ industry-standard security measures to
          protect your information from unauthorized access, disclosure, and
          misuse.
        </p>

        <p>
          <b>Changes:</b> We reserve the right to modify or update this privacy
          policy at any time without prior notice.
        </p>

        <p>
          By using <Link href="https://www.tiktook.in">TikTook.in</Link>, you
          agree to this privacy policy. For questions or concerns, please
          contact us through our website&apos;s{" "}
          <Link href="/contact-us">Contact Us</Link> page.
        </p>
      </main>
    </div>
  );
}
