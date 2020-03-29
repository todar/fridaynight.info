import React from "react";
import TextField from "@material-ui/core/TextField";

const searchBox = () => {
  return (
    <div style={style}>
      <TextField
        color="secondary"
        variant="outlined"
        fullWidth
        placeholder="Search for songs"
      />
    </div>
  );
};

const style = {
  position: "fixed",
  width: "100%",
  padding: "0 12px",
  bottom: "70px"
};

export default searchBox;
