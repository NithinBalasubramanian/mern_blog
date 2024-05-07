import axios from 'axios';

const Instance = axios.create(
    { 
        baseURL : 'https://mern-blog-xubc.onrender.com/Api/',
    }
)

export default Instance;