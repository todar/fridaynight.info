/**
 * This is the 🍞 and 🧈. The main purpose of the entire app comes
 * from the need of having a digital songbook.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "../../components/Link";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MusicNote from "@material-ui/icons/MusicNote";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LikeIcon from "@material-ui/icons/Favorite";

import SearchBox from "../../components/searchBox";
import { useSearch } from "../../context/searchContext";

const SongPage = ({ songList }) => {
  const [{ value }] = useSearch();

  const filteredList = songList.filter(song => {
    console.log(song.data.title);
    if (
      song.data.title.toLowerCase().includes(value.toLowerCase()) ||
      value === ""
    ) {
      return song;
    }
  });
  return (
    <Container maxWidth="md" disableGutters={true}>
      <List>
        {filteredList.map(song => {
          return (
            <>
              <Link
                key={song.slug}
                href={"/songs/" + song.slug}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNote />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={song.data.title}
                    secondary={song.data.artist}
                  />
                  {/* <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <LikeIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                </ListItem>
              </Link>
              <Divider />
            </>
          );
        })}
      </List>
      <SearchBox />
    </Container>
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
