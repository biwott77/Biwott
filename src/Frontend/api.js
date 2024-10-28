import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth services
export const authService = {
    login: async (email, password) => {
        try {
            const response = await api.post('/auth/login/', { email, password });
            localStorage.setItem('access_token', response.data.access);
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    },

    register: async (userData) => {
        try {
            const response = await api.post('/auth/register/', userData);
            localStorage.setItem('access_token', response.data.access);
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    },

    logout: () => {
        localStorage.removeItem('access_token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('access_token');
    }
};

// Comment services
export const commentService = {
    getComments: async () => {
        try {
            const response = await api.get('/comments/');
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    },

    createComment: async (content) => {
        try {
            const response = await api.post('/comments/', { content });
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    },

    updateComment: async (id, content) => {
        try {
            const response = await api.put(`/comments/${id}/`, { content });
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    },

    deleteComment: async (id) => {
        try {
            await api.delete(`/comments/${id}/`);
        } catch (error) {
            throw error.response?.data || { error: 'Network error' };
        }
    }
};