import React from "react";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function ContactUs() {
  const router = useRouter();
  const { confirm } = router.query;

  return (
    <div className={styles.main_div}>
      <Head>
        <title>Contact Us | TikTook.in</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta property="og:url" content="https://www.tiktook.in/contact-us" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Contact Us | tiktook.in - Tech blog: Latest trends & innovations" />
        <meta
          name="keywords"
          content="Fresco Play, TCS Milestone, great offers, best offers, amazon offers, tech blogs, chatgpt, amazon, TikTook.in, tiktook.in"
        />
        <meta name="author" content="tiktook.in" />
      </Head>
      <h1>Contact Us</h1>
      <main>
        <p>
          We value your thoughts and are eager to connect with you! Whether you
          have questions, comments, or feedback about our website or the content
          we provide, please feel free to reach out to us.
        </p>

        <p>
          To get in touch, simply use our contact form below. By filling out
          your name, email address, and message, you can expect a prompt
          response from our team.
        </p>

        <p>
          Thank you for your interest in{" "}
          <Link href="https://www.tiktook.in">TikTook.in</Link>, and we
          can&apos;t wait to hear from you!
        </p>
      </main>
      <span className={styles.contact_now}>Contact us</span>
      <ContactForm
        landing="https://www.tiktook.in/contact-us?confirm=true"
        confirm={confirm}
      />
    </div>
  );
}
