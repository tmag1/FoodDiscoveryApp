import React, {useState, useEffect} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import Map from './components/Map';
import Header from './components/Header';
import List from './components/List';
import './App.css';



function App() {
  const[places,setPlaces] = useState([]);
  const[coordinates,setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ne:{lat: 0,lng:0}, sw:{lat: 0,lng:0}});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(()=>{
    getPlacesData(bounds.sw,bounds.ne)
      .then((data)=>{
        console.log(data);
        setPlaces(data);
      })
  },[coordinates,bounds]);

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style = {{width: '100%'}}>
        <Grid item xs={12} md = {4}>
          <List places = {places}/>
        </Grid>
        <Grid item xs={12} md = {8}>
        <Map
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates = {coordinates}
            places = {places}
            bounds = {bounds}
         />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
