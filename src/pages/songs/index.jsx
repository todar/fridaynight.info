/**
 * This is the 🍞 and 🧈. The main purpose of the entire app comes
 * from the need of having a digital songbook.
 */

import Link from "next/link";
import fs from "fs";

const SongPage = ({ slugs }) => (
  <div>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/songs/" + slug}>
            <a>{slug}</a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("src/songs");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default SongPage;
