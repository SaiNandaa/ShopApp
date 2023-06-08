import axios from 'axios';
export const getPlacesData = async (type) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list`, {
   params: {
    location_id: '293919',
    restaurant_tagcategory: '10591',
    restaurant_tagcategory_standalone: '10591',
    currency: 'USD',
    lunit: 'km',
    limit: '30',
    open_now: 'false',
    lang: 'en_US'
  },
      headers: {
        'X-RapidAPI-Key': '13678c5673msh862ff8a85a61541p1c9935jsn583be60a1fe9',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
    // console.log(type);
  } catch(error) {
    return error;
}
};

