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
        },
        userTasks(id) {

        }
    },

    tasks: {
        all() {
            return axios.post('/tasks', {
                filter: {},
                page: 0,
                limit: 0
              })
        },
        id(id) {
            return axios.get(`/tasks/${id}`)
        },
        status(id, status) {
            return axios.patch(`/tasks/${id}/status/${status}`)
        },
        edit(id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank) {
            return axios.put(`/tasks/createOrEdit`, {
                id: id,
                userId: userId,
                assignedId: assignedId,
                title: title,
                description: description,
                type: type,
                dateOfCreation: dateOfCreation,
                dateOfUpdate: dateOfUpdate,
                timeInMinutes: timeInMinutes,
                status: status,
                rank: rank
            })
        },
        create(userId, assignedId, title, description, rank, type) {
            return axios.put(`/tasks/createOrEdit`, {
                userId: userId,
                assignedId: assignedId,
                title: title,
                description: description,
                type: type,
                timeInMinutes: 0,
                status: "opened",
                rank: rank
            })
        }
    },

    comments: {
        taskId(id) {
            console.log(id)
            return axios.get(`/comments/${id}`)
        },
        add(taskId, userId, text) {
            return axios.put('/comments/createOrEdit', {
            taskId: taskId,
            userId: userId,
            text: text
            })
        },
        edit(id, taskId, userId, text) {
            return axios.put('/comments/createOrEdit', {
            id: id,
            taskId: taskId,
            userId: userId,
            text: text
            })
        }
    }
}
