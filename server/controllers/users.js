import axios from 'axios';
const url = 'https://randomuser.me/api/';

export const getUsers = async (req, res) => {
    const { page } = req.query
    try {
        const users = await axios.get(`${url}?page=${page}&results=100&seed=abc`);
        res.status(200).json(users.data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}