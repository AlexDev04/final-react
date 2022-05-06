import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://93.95.97.34/api',
})

export const api = {
    users: {
        all() {
            return axios.get('users/all').then(response => console.log(response))
        },
        login(login, password) {
            return axios.post('users/login', {
                login: login,
                password: password
            })
            // .then(response => console.log(response))
            // .catch(error => console.log(error))
        }
    }
}
