import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

import mapStyles from './mapStyles';

const Map = ({setCoordinates,setBounds,coordinates,places,bounds}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px');

  return (
      <div className = {classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys = {{key:'GOOGLE_MAPS_API_KEY'}}
        defaultCenter = {coordinates}
        center = {coordinates}
        defaultZoom = {14}
        margin = {[50,50,50,50]}
        options ={{disableDefaultUI: true,zoomControl:true,styles: mapStyles}}
        onChange ={(e)=>{
          console.log(e);
          setCoordinates({lat:e.center.lat, lng:e.center.lng});
          console.log("e is ",e.marginBounds.ne, e.marginBounds.sw );
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={''}
    >
        {places.map((place,i)=>(
          <div
              className = {classes.mapContainer}
              lat = {Number(place.latitude)}
              lng = {Number(place.longitude)}
              key = {i}
            >
            {
              //<LocationOnOutlinedIcon color = "primary" fontSize = "large"/>
              <Paper elevation = {3} className = {classes.paper}>
                <Typography className = {classes.typography} variant = "subtitle2" gutterBottom>
                  {place.name}
                </Typography>
              </Paper>
            }

          </div>

        ))}
        
        </GoogleMapReact>

      </div>
    );
};

export default Map;
