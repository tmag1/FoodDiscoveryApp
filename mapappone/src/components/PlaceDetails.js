import React from 'react';
import {Box,Typography,Button,Card,CardContent,CardActions,Chip, CardMedia} from '@material-ui/core';
import LocationOnIcon from'@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const PlaceDetails = ({place}) => {
    const classes = useStyles();
  return (
      <Card elevation={6}>
        <CardMedia
            style = {{height : 350}}
            image={place.photo ? place.photo.images.large.url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FCommons%3AQuality_images&psig=AOvVaw2k1hD7ddCP7vZrfRO3QJqZ&ust=1643442796047000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCbo9P70_UCFQAAAAAdAAAAABAD'}
            title = {place.name}
        />
        <CardContent>
            <Typography gutterBottom variant = "h5">{place.name}</Typography>
        </CardContent>
      </Card>
  );
};

export default PlaceDetails;
