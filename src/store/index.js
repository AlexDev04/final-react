import { makeAutoObservable } from "mobx";
import { api } from '../api/API'

class Modal {
    opened = false

    constructor() {
        makeAutoObservable(this)
    }

    open() {
        modal.opened = true
    }

    close() {
        modal.opened = false
    }

}

export const modal = new (Modal);

class Store {

    constructor() {
        makeAutoObservable(this)
    }

    curUser = {
        id: '',
        username: '',
        login: '',
        about: '',
        photoUrl: '',
        password: ''
    };

    openedUser = {
        id: '',
        username: '',
        login: '',
        about: '',
        photoUrl: ''
    }

    openedTask = {
        id: '',
        userId: '',
        user: '',
        assignedId: '',
        assigned: '',
        title: '',
        description: '',
        type: '',
        typeRu: '',
        dateOfCreation: '2022-05-07T12:59:23.232Z',
        dateOfUpdate: '2022-05-07T12:59:23.232Z',
        timeInMinutes: 0,
        status: '',
        statusRu: '',
        rank: '',
        rankRu: '',
        comments: []
    }

    users = [];

    tasks = [];

    authorized = false;

    data = {
        users: {
            login(data) {
                api.users.login(data.login, data.password)
                    .then(response => {
                        store.curUser.id = response.data.id
                        store.curUser.username = response.data.username
                        store.curUser.login = response.data.login
                        store.curUser.about = response.data.about
                        store.curUser.photoUrl = response.data.photoUrl
                        store.authorized = true
                    })
            },
            all() {
                api.users.all()
                    .then(response => {
                        store.users = [];
                        response.data.map(el => store.users.push(el))
                    })
            },
            id(id) {
                api.users.id(id)
                    .then(response => {
                        console.log(`get user by id ${id}`)
                        store.openedUser.id = response.data.id
                        store.openedUser.username = response.data.username
                        store.openedUser.login = response.data.login
                        store.openedUser.about = response.data.about
                        store.openedUser.photoUrl = response.data.photoUrl
                    })
            },
            edit(user) {
                api.users.edit(user.id, user.login, user.username, user.about, user.photoUrl, store.curUser.password)
                    .then(response => {
                        console.log(response);
                        console.log(user)
                    })
            }
        },
        tasks: {
            all() {
                api.tasks.all()
                    .then(response => {
                        store.tasks = [];
                        console.log(response);
                        response.data.data.map(el => store.tasks.push(el))
                    })
            },
            id(id) {
                api.tasks.id(id)
                .then(response => {
                    console.log(response.data);
                    store.openedTask.id = response.data.id;
                    store.openedTask.userId = response.data.userId;
                    store.openedTask.assignedId = response.data.assignedId;
                    store.openedTask.title = response.data.title;
                    store.openedTask.description = response.data.description;
                    store.openedTask.type = response.data.type;
                    switch(response.data.type) {
                        case 'bug':
                            store.openedTask.typeRu = 'Баг';
                            break;
                        case 'task':
                            store.openedTask.typeRu = 'Задача';
                            break;
                    }
                    store.openedTask.dateOfCreation = response.data.dateOfCreation;
                    store.openedTask.dateOfUpdate = response.data.dateOfUpdate;
                    store.openedTask.timeInMinutes = response.data.timeInMinutes;
                    store.openedTask.status = response.data.status;
                    switch(response.data.status) {
                        case 'opened':
                            store.openedTask.statusRu = 'Открыто';
                            break;
                        case 'inProgress':
                            store.openedTask.statusRu = 'В работе';
                            break;
                        case 'testing':
                            store.openedTask.statusRu = 'Тестируется';
                            break;
                        case 'completed':
                            store.openedTask.statusRu = 'Завершено';
                            break;
                    }
                    store.openedTask.rank = response.data.rank;
                    switch(response.data.rank) {
                        case 'low':
                            store.openedTask.rankRu = 'Низкий';
                            break;
                        case 'medium':
                            store.openedTask.rankRu = 'Средний';
                            break;
                        case 'high':
                            store.openedTask.rankRu = 'Высокий';
                            break;
                    }
                    api.users.id(response.data.userId)
                        .then(response => store.openedTask.user = response.data.username);
                    api.users.id(response.data.assignedId)
                        .then(response => store.openedTask.assigned = response.data.username);
                    api.comments.taskId(response.data.id)
                        .then(response => store.openedTask.comments = response.data)
                })
            },
            changeStatus(id, status) {
                api.tasks.status(id, status)
                    .then(response => console.log(response))
            },
            edit(id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank) {
                api.tasks.edit(id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank)
                    .then(response => console.log(response))
            },
            add(assignedId, title, description, rank, type) {
                api.tasks.create(store.curUser.id, assignedId, title, description, rank, type)
                .then(response => console.log(response))
            }
        },
        comments: {
            add(text) {
                api.comments.add(store.openedTask.id, store.curUser.id, text)
                    .then(response => console.log(response))
            }
        }
    };
}

export const store = new(Store)