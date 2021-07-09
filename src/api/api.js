import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const postsAPI = {

    getPosts(currentPage = 1, pageSize = 10) {
        return instance.get(`posts?page=${currentPage}&page_size=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
};

export const authAPI = {
    
    getMe(token) {
        return instance.get('profile', { headers: { 'x-access-token': token } })
            .then(response => {
                return response.data;
            });
    },

    signUp(email, password, password_confirmation) {
        return instance.post('sign_up', { email, password, password_confirmation })
            .then(response => {
                return response;
            });
    },

    login(email, password) {
        return instance.post('sign_in', { email, password })
            .then(response => {
                return response.data;
            });
    },

    logout() {
        return instance.delete(`sign_out`)
            .then(response => {
                return response.data;
            });
    },
};
