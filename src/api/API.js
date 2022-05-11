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
            return axios.post('/tasks', {
                filter: {
                    // assignedUsers: [
                    //     id
                    // ],
                },
                page: 0,
                limit: 0
            })
        }
    },

    tasks: {
        all(page, limit) {
            return axios.post('/tasks', {
                filter: {},
                page: page,
                limit: limit
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
        },
        delete(id) {
            return axios.delete(`/tasks/${id}`)
        },
        addWorktime(taskId, time, comment, userId) {
            return axios.patch(`/tasks/${taskId}/worktime`, {
                timeInMinutes: time,
                comment: comment,
                currentUser: userId
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
