import React from "react";
import PostItem from "./PostItem";
import { Grid } from "@mui/material";
import { postArray } from "../../data/posts.js.js.js.js";

const PostList = () => {
  const modArray = postArray.map((item) => {
    return { ...item, detail: "" };
  });

  console.log("modArray", modArray);
  console.log("postArray", postArray);

  return (
    <>
      <Grid container direction="row" spacing={1}>
        {modArray.map((item, index) => (
          <Grid key={index} item xs={6}>
            <PostItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostList;
