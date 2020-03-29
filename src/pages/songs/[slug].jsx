import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

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

      <Container>
        <header style={headerStyle}>
          <Box my={3}>
            <Typography variant="h4" component="h1">
              {data.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {data.artist}
            </Typography>
          </Box>
        </header>
        <Divider style={{ background: "#ffd600" }} />
        <Typography variant="body1">
          <pre dangerouslySetInnerHTML={{ __html: htmlString }} />

          <pre className="caption">{data.copyright}</pre>
        </Typography>
      </Container>
    </>
  );
};

const headerStyle = {
  paddingTop: "10px"
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
