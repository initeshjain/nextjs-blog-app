import Script from "next/script";
import React from "react";

export default function InFeed() {
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
        data-ad-format="fluid"
        data-ad-layout-key="-gw-3+1f-3d+2z"
        data-ad-client="ca-pub-6342595909134126"
        data-ad-slot="7546218146"
      ></ins>
      <Script id="infeed-ad">
        {`
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}
      </Script>
    </>
  );
}
