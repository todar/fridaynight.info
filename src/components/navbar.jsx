import React from "react";
import Link from "./link";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SongsIcon from "@material-ui/icons/MusicNote";
import ConnectIcon from "@material-ui/icons/LocationOn";
import { styled } from "@material-ui/core/styles";

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    color: theme.palette.secondary.main
  })
);

const navbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StyledBottomNavigation
      style={bottomNavStyle}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        href="/"
        label="Home"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        component={Link}
        href="/songs"
        label="Songs"
        icon={<SongsIcon />}
      />
      <BottomNavigationAction
        component={Link}
        href="/connect"
        label="Connect"
        icon={<ConnectIcon />}
      />
    </StyledBottomNavigation>
  );
};

export default navbar;

const bottomNavStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%"
};

{
  /* <div>
<nav>
  <Link href="/">
    <a>Home</a>
  </Link>
  <Link href="/songs">
    <a>Songs</a>
  </Link>
  <Link href="/connect">
    <a>Connect</a>
  </Link>
</nav>
</div> */
}
