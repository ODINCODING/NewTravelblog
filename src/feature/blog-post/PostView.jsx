import React from "react";
import { useParams } from "react-router";
import { postArray } from "../../data/posts";
import { Grid } from "@mui/material";
import PostItem from "./PostItem";
import GoogleMapReact from "google-map-react";
import MapMarker from "../../components/MapMarker";

const PostView = () => {
  const { id } = useParams();
  const post = postArray.find((item) => ~~item.id === ~~id);
  console.log("post", post);
  const defaultProps = {
    center: {
      lat: post.lat,
      lng: post.lng,
    },
    zoom: 14,
  };

  return (
    <>
      <br></br>

      <Grid container direction="row" spacing={1}>
        <Grid item xs={6}>
          <PostItem item={post} />
        </Grid>

        <Grid item xs={6}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapMarker
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
            />
          </GoogleMapReact>
        </Grid>
      </Grid>
    </>
  );
};

export default PostView;
