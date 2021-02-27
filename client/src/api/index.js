import axios from 'axios';

const url = 'http://localhost:5000/users/';

export const fetchUsers = (page) => axios.get(`${url}?page=${page}`);