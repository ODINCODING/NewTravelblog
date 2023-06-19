import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const PostAdd = () => {
  const [title, setTitle] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [date, setDate] = useState(Date.now());
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <br></br>

      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item lg={12}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Grid>

          <Grid item lg={12}>
            <TextField
              fullWidth
              type="date"
              label="Visiting Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Grid>

          <Grid item lg={12}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleFileUpload}
              />
              <PhotoCamera />
            </IconButton>
          </Grid>

          {imageUrl && (
            <Grid item lg={12}>
              <img src={imageUrl} alt="Uploaded Image" height="200" />
            </Grid>
          )}

          <Grid item lg={12}>
            <TextField
              fullWidth
              type="number"
              label="Longitude"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            />
          </Grid>

          <Grid item lg={12}>
            <TextField
              fullWidth
              type="number"
              label="Latitude"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </Grid>

          <Grid item lg={12}>
            <TextField
              fullWidth
              multiline
              type="text"
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Grid>

          <Grid item lg={12}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PostAdd;
