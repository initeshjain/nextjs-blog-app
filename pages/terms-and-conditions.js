import React from "react";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <div className={styles.main_div}>
      <Head>
        <title>Terms and Conditions | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta
          property="og:url"
          content="https://www.tiktook.in/terms-and-conditions"
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Terms & Conditions | tiktook.in - Tech blog: Latest trends & innovations"
        />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      <h1>Terms and Conditions</h1>
      <main>
        <p>
          Welcome to <Link href="https://www.tiktook.in">TikTook.in</Link>. By
          accessing and using our website, you agree to comply with and be bound
          by the following terms and conditions:
        </p>

        <p>
          <b>Content:</b> All content on{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> is for
          informational purposes only. While we strive for accuracy, we do not
          guarantee the reliability or availability of the information
          presented.
        </p>

        <p>
          <b>Copyright:</b> All content on{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> is protected by
          copyright law. Reproduction or distribution without written permission
          is prohibited.
        </p>

        <p>
          <b>External Links:</b>{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> may contain
          links to external websites. We do not endorse or guarantee the
          accuracy of information on these sites and are not responsible for
          their content or practices.
        </p>

        <p>
          <b>Disclaimer of Warranties:</b>{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> is provided
          &apos;as is,&apos; and we make no warranties or guarantees, express or
          implied.
        </p>

        <p>
          <b>Limitation of Liability:</b> In no event shall{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link> or its owners be
          liable for any damages, including direct, indirect, or consequential,
          arising from the use or inability to use our website.
        </p>

        <p>
          <b>Changes:</b> We reserve the right to modify these terms and
          conditions without prior notice.
        </p>

        <p>
          By using <Link href="https://www.tiktook.in">TikTook.in</Link>, you
          agree to these terms and conditions. If you do not agree, please do
          not use our website.
        </p>

        <p>
          If you want to reach out to us, please visit our{" "}
          <Link href="/contact-us">Contact Us</Link> page.
        </p>
      </main>
    </div>
  );
}
