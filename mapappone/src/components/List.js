import React from 'react';
import { useState } from 'react';
import { CircularProgress,Grid,Typography, InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from './PlaceDetails';
const List = ({places}) => {
  const classes = useStyles();
  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState('');

  // const places = [
  //   {name :'Roccos'},
  //   {name :'BJs'},
  //   {name :'Gushi'},
  // ]

  return (
    <div className = {classes.container}>
    <Typography variant = "h4">Places around you</Typography>
    <FormControl className = {classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value ={type} onChange = {(e)=>setType(e.target.value)}>
        <MenuItem value= "restaurants">Restarants </MenuItem>
        <MenuItem value= "clubs">clubs </MenuItem>
        <MenuItem value= "events">events </MenuItem>
      </Select>
    </FormControl>
    <FormControl className = {classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value ={rating} onChange = {(e)=>setRating(e.target.value)}>
        <MenuItem value= {0}>All</MenuItem>
        <MenuItem value= {3}>Above 3 stars</MenuItem>
        <MenuItem value= {4.5}> Above 4.5 stars</MenuItem>
      </Select>
    </FormControl>
    <Grid container spacing ={3} className = {classes.list}>
      {places?.map((place,i)=>(
        <Grid item key={i} xs ={12}>
          <PlaceDetails place = {place} />
        </Grid>
      ))}
    </Grid>
    </div>
    );
};

export default List;
