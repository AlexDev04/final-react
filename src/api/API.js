import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://93.95.97.34/api',
})

export const api = {
    users: {
        all() {
            return axios.get('users/all')
        },
        login(login, password) {
            return axios.post('users/login', {
                login: login,
                password: password
            })
        },
        id(id) {
            return axios.get(`users/${id}`)
        },
        edit(id, login, username, about, url, password) {
            return axios.put('users/edit', {
                id: id,
                login: login,
                username: username,
                about: about,
                photoUrl: url,
                password: password,
            })
        }
    }
}
