import axios from 'axios';

const apiGoogle = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})
export default apiGoogle;