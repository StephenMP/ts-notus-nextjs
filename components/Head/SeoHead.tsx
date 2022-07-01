import Head from "next/head";

export type RwmHeadProps = {
  title?: string;
  description: string;
  children?: JSX.Element;
};

export default function SeoHead(props: RwmHeadProps) {
  return (
    <Head>
      <title>{props.title ?? "TS Notus NextJS"}</title>
      <meta name="description" content={props.description}></meta>
      {props.children}
    </Head>
  );
}
