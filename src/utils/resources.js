import axios from 'axios';

export const config = { baseUrl: 'https://api.github.com/users/' };

export const instance = axios.create({ baseURL: config.baseUrl });


// Get Profile Data API
export const getProfileData = async (profileName) => instance.get(`${profileName}`).then((res) => res).catch((err) => alert('No Data Available for this Profile'));


export default getProfileData;


