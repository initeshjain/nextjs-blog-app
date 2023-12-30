import Script from "next/script";
import React from "react";

export default function VerticalOne() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6342595909134126"
        crossorigin="anonymous"
      ></Script>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6342595909134126"
        data-ad-slot="6546893449"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="verticalone-ad">
        {`
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}
      </Script>
    </>
  );
}
