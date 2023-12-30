import Link from "next/link";
import styles from "./ShareButtons.module.css";

export default function ShareButtons({ url, title }) {
  return (
    <>
        <div className={styles.share_btns}>
          <Link
            href={`https://twitter.com/intent/tweet?text=${title}&url=https://www.tiktook.in${url}`}
            track-name="twitter"
            track-type="social share"
            track-metadata-eventdetail="twitter.com/intent/tweet?text=5 cheat sheets to help you get started on your Google Cloud journey @googlecloud&amp;url=cloud.google.com/blog/products/gcp/5-google-cloud-product-cheat-sheets-2021"
            track-metadata-module="social icons"
            target="_blank"
            rel="noopener"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M7.5,21.8c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6c1-0.7,1.8-1.6,2.5-2.5c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7 c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1 C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,4,4.8c-0.4,0.1-0.8,0.2-1.3,0.2 c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1C2.2,20.9,4.8,21.8,7.5,21.8"></path>
            </svg>
          </Link>

          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.tiktook.in${url}&title=${title}`}
            track-name="linkedin"
            track-type="social share"
            track-metadata-eventdetail="www.linkedin.com/shareArticle?mini=true&amp;url=cloud.google.com/blog/products/gcp/5-google-cloud-product-cheat-sheets-2021&amp;title=5 cheat sheets to help you get started on your Google Cloud journey"
            track-metadata-module="social icons"
            target="_blank"
            rel="noopener"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zM6.5 8.31c-1 0-1.81-.81-1.81-1.81S5.5 4.69 6.5 4.69s1.81.81 1.81 1.81S7.5 8.31 6.5 8.31zM19 19h-3v-5.3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V19h-3v-9h3v1.2c.52-.84 1.59-1.4 2.5-1.4 1.93 0 3.5 1.57 3.5 3.5V19z"></path>
            </svg>
          </Link>

          <Link
            href={`https://www.facebook.com/sharer/sharer.php?caption=${title}&u=https://www.tiktook.in${url}`}
            track-name="facebook"
            track-type="social share"
            track-metadata-eventdetail="www.facebook.com/sharer/sharer.php?caption=5 cheat sheets to help you get started on your Google Cloud journey&amp;u=cloud.google.com/blog/products/gcp/5-google-cloud-product-cheat-sheets-2021"
            track-metadata-module="social icons"
            target="_blank"
            rel="noopener"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 2v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v7h-3v-7h-2v-3h2V7.5C13 5.57 14.57 4 16.5 4H19z"></path>
            </svg>
          </Link>

          <Link
            href={`mailto:?subject=${title}&body=Check out this article on the tiktook.in Blog:%0A%0A${title}%0A%0Ahttps://www.tiktook.in${url}`}
            track-name="email"
            track-type="social share"
            track-metadata-eventdetail={`mailto:?subject=${title}&body=Check out this article on the tiktook.in Blog:%0A%0A${title}%0A%0Ahttps://www.tiktook.in${url}`}
            track-metadata-module="social icons"
            target="_blank"
            rel="noopener"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 10.8 4.8 6h14.4zM4 18V7.87l8 5.33 8-5.33V18H4z"></path>
            </svg>
          </Link>
        </div>
    </>
  );
}
