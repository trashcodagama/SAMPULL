import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import picture from './images/random.jpg'
import './MediaControl.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import song1 from "./music/spaceship.wav";

import {Component} from "react";

let song = new Audio(song1);

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff8800',
      },
      secondary: {
        main:'#FFFFFF'
      },
    },
  });

  

  export default function MediaControlCard() {
    
    return (
      <ThemeProvider theme = {theme}>
    <Card sx={{ display: 'flex' }}>
      <Box className = "CardBox" sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
  
            <div className= "Track_title">

            SP4CESH1P.wav
            </div>


          <div className= "subtitle">

            purpiedurpie
            </div>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton color = "secondary"  aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton color = "secondary" aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton color = "secondary" aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 180 }}
        image={picture}
        alt="Something"
      />
    </Card>
    </ThemeProvider>
  );
}