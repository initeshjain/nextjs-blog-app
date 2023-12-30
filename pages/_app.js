import "../styles/globals.css";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Router from "next/router";
import React from "react";
import LoadingBar from "react-top-loading-bar";
import Script from "next/script";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  // const [user, setUser] = React.useState({ value: null });
  // const [key, setKey] = React.useState();

  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
      setProgress(40);
    };
    const end = () => {
      setLoading(false);
      setProgress(100);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("myuser");
  //   setUser({ value: null });
  //   setKey(Math.random());
  //   router.reload("/");
  // };

  return (
    <>
      <LoadingBar
        color="#00f2ea"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
        shadow={true}
        height={2.5}
        loaderSpeed={100}
      />
      <div className={loading ? "app_loading app" : "app"}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script
          id="Adsense-id"
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
          async="true"
          strategy="afterInteractive"
          onError={(e) => {
            throw ("Script failed to load", e);
          }}
          crossorigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
        />
        {/* <NavBar user={user} key={key} /> */}
        <NavBar />
        <div className="main_content_container">
          {/* <Component {...pageProps} logout={logout} /> */}
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}
