/**
 * This is the 🍞 and 🧈. The main purpose of the entire app comes
 * from the need of having a digital songbook.
 */

import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SongPage = ({ songList }) => {
  console.log(songList);
  return (
    <div className="collection">
      {songList.map(song => {
        return (
          <Link key={song.slug} href={"/songs/" + song.slug}>
            <div className="collection-item">
              <section className="title-section">
                <span className="title">{song.data.title}</span>
                <span className="artist">{song.data.artist}</span>
              </section>
            </div>
          </Link>
        );
      })}
      <style jsx>{`
        .collection {
          display: flex;
          flex-direction: column;
        }

        .collection-item {
          display: flex;
          align-items: center;
          height: 60px;
          border-bottom: 1px solid #a1a3a4;
          padding: 0 16px;
        }

        .collection-item:active {
          background-color: #d3d4d5;
        }

        .title-section {
          display: flex;
          flex-direction: column;
        }

        .title {
          margin-bottom: 3px;
        }

        .artist {
          color: #717374;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("src/songs");
  const slugs = files.map(file => {
    return file.replace(".md", "");
  });

  const songList = files.map(file => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("src", "songs", file))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      data: parsedMarkdown.data,
      slug: file.replace(".md", "")
    };
  });

  return {
    props: {
      songList
    }
  };
};

export default SongPage;
