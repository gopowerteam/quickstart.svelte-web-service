import type { StoreonModule } from 'storeon'
import type { Store } from '.'

export interface UserState {
    userid: string
}

export interface UserEvents {
    login: string
}

const state: UserState = {
    userid: ''
}

const module: StoreonModule<UserState, UserEvents> = (store) => {
    store.on('@init', () => state)
    store.on('login', (state, id) => ({ ...state, userid: id }))
}

export const UserStore: Store<UserState, UserEvents> = {
    keys: Object.keys(state) as Array<keyof UserState>,
    module
}
