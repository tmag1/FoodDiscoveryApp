import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'TRAVEL_ADVISOR_API_KEY',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    console.log("bru");
    
    return data;
  } catch (error) {
    console.log(sw,ne);
    console.log(error);
  }
}