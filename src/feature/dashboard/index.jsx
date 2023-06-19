import { Grid, Typography } from "@mui/material";
import React from "react";
import PostList from "../blog-post/PostList";
import GoogleMapReact from "google-map-react";
import MapMarker from "../../component/MapMarker";
// import { postArray } from "../../data/posts";

const defaultProps = {
  center: {
    lat: 53.551086,
    lng: 9.993682,
  },
  zoom: 20,
};

const Dashboard = () => {
  // const postLocation = postArray.map((item) => {
  //   return {
  //     center: { lat: item.lat, lng: item.lng },
  //     zoom: 12,
  //   };
  // });

  // console.log("postLocation", postLocation);

  return (
    <>
      <br></br>

      <Grid container direction="row" spacing={1}>
        <Grid item xs={6}>
          <PostList />
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
              text="My Marker"
            />
          </GoogleMapReact>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
