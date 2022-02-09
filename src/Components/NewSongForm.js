import Favorite from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { Container,  TextField } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import MakePageImage from "../Assets/makeNew_image.jpg";

export default function NewSongForm() {
 

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    isFavorite: false,
  });

  const clickHandler = () => {
    navigate(`/`);
  };

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value);
    event.target.id === "amount"
      ? setSong({
          ...song,
          [event.target.id]: Number(event.target.value),
        })
      : setSong({
          ...song,
          [event.target.id]: event.target.value,
        });
  };
  const URL = process.env.REACT_APP_API_URL
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting");
    axios.post(`${URL}/songs`, song).then(() => {
      navigate("/");
    });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.isFavorite });
  };
  console.log(song);
  return (
    <Container>
      <Box sx={{ fontWeight: "bold" }}>
        <Typography variant="h5" sx={{ mt: 2, textAlign: "center" }}>
          What is your song?
        </Typography>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          mt: 1,
          minHeight: 700,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={5}>
          <FormControl required>
            <Card sx={{ width: "100%", height: "auto" }}>
              <CardMedia
                component="img"
                alt="video"
                height="auto"
                image={MakePageImage}
              />
              <CardContent>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {textFormatter(song)} */}
                    Name:
                  </Typography>

                  <TextField
                    id="name"
                    variant="standard"
                    onChange={handleChange}
                    value={song.name}
                    sx={{ ml: 2.8 }}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {textFormatter(song)} */}
                    Artist:
                  </Typography>

                  <TextField
                    id="artist"
                    variant="standard"
                    onChange={handleChange}
                    value={song.artist}
                    sx={{ ml: 3.8 }}
                  />
                </Grid>

                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Album:
                  </Typography>

                  <TextField
                    id="album"
                    variant="standard"
                    onChange={handleChange}
                    value={song.album}
                    sx={{ ml: 2.2 }}
                  />
                </Grid>
                <Grid container sx={{ mb: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Time:
                  </Typography>
                  <TextField
                    id="time"
                    variant="standard"
                    onChange={handleChange}
                    value={song.time}
                    sx={{ ml: 4.1 }}
                  />
                </Grid>
                <Grid container>
                  <Typography variant="h5" sx={{ overflow: "auto" }}>
                    Favorite:
                  </Typography>
                  <Checkbox
                    onChange={handleCheckboxChange}
                    id="isFavorite"
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleSubmit}>
                  Submit
                </Button>

                <Button size="small" onClick={clickHandler}>
                  Back to Home
                </Button>
              </CardActions>
            </Card>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
