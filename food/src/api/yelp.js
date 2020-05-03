import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3LSDu-z7ZHnxI9WO3gVdzHW7KZAEB0yWzvjV1T6rpw77fz2tvqywJ6ozB1LxlrS7ZqiQjenR5Zgv_YfI5rxG4T_egE51O8AGO_63bpYa3CIcIp0VTb3dEqYTOmetXnYx'
    }
});