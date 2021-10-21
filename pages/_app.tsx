import "@fortawesome/fontawesome-free/css/all.min.css";
import { NextComponentType } from "next";
import App, { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import Head from "next/head";
import router from "next/router";
import Router from "next/router";
import React, { Component, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
import PageChange from "../components/PageChange/PageChange";
import "../styles/tailwind.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});

Router.events.on("routeChangeComplete", () => {
  const pageTransition = document.getElementById("page-transition")
  if (pageTransition) {
    ReactDOM.unmountComponentAtNode(pageTransition);
    document.body.classList.remove("body-page-transition");
  }
});

Router.events.on("routeChangeError", () => {
  const pageTransition = document.getElementById("page-transition")
  if (pageTransition) {
    ReactDOM.unmountComponentAtNode(pageTransition);
    document.body.classList.remove("body-page-transition");
  }
});

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (props: AppLayoutProps) => {
  useEffect(() => {
    const comment = document.createComment(`

================================================================
* TS Notus NextJS - v1.1.0 based on notus-nextjs by Creative Tim
================================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Repository: https://github.com/StephenMP/ts-notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/StephenMP/ts-notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim and ported to TypeScript by StephenMP

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }, [])

  const { Component, pageProps } = props;
  const Layout = Component.layout || (({ children }: anyOk) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>TS Notus NextJS by Creative Tim and StephenMP</title>
        <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async ({ Component, router, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default MyApp