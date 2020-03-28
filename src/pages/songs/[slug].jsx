import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Song = ({ htmlString, data }) => {
  console.log(data.copyright);
  return (
    <>
      <Head>
        <title>{`${data.title} | ${data.artist}`}</title>
        <meta
          title="description"
          content={`Lyrics to ${data.title} by ${data.artist}`}
        />
      </Head>
      <div className="container">
        <header>
          <h1>{data.title}</h1>
          <h2>{data.artist}</h2>
        </header>
        <pre dangerouslySetInnerHTML={{ __html: htmlString }} />
        <pre className="caption">{data.copyright}</pre>
      </div>
      <style jsx>{`
        h1,
        h2 {
          margin: 0;
          font-size: 1.725rem;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-weight: 400;
          line-height: 1.235;
          letter-spacing: 0.00735em;
        }

        h2 {
           {
            /* display: inline-block; */
          }
          font-size: 1.485rem;
          margin: 0.65rem 0 1.5rem;
          padding: 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #ffd600;
        }
        .caption {
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.66;
          letter-spacing: 0.03333em;
          margin-bottom: 60px;
        }
      `}</style>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("src/songs");

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("src", "songs", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data
    }
  };
};

export default Song;
