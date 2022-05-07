import { makeAutoObservable } from "mobx";
import { api } from '../api/API'

class Modal {
    opened = false

    constructor() {
        makeAutoObservable(this)
    }

    open() {
        this.opened = true
    }

    close() {
        this.opened = false
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
        photoUrl: ''
    };

    openedUser = {
        id: '',
        username: '',
        login: '',
        about: '',
        photoUrl: ''
    }

    users=[]

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
            }
        }
    };
}

export const store = new(Store)