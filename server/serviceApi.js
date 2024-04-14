import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users/';

const api = axios.create({ baseURL });


export const fetchUsers = async () => {
    try {
        const response = await api.get();
        return response.data;
    } catch (err) {
        return [];
    }
};

export const fetchPosts = async (idUser) => {
    try {
        const response = await api.get(`${idUser}/posts`);
        return response.data;
    } catch (err) {
        return [];
    }
};

export const fetchAlbums = async (idUser) => {
    try {
        const response = await api.get(`${idUser}/albums`);
        return response.data;
    } catch (err) {
        return [];
    }
};