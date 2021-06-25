import type { StoreonModule } from 'storeon'
import type { Store } from '.'

export interface AppState {
    ready: boolean
}

export interface AppEvents {
    ready: undefined
}

const state: AppState = {
    ready: false
}

const appModule: StoreonModule<AppState, AppEvents> = (store) => {
    store.on('@init', () => state)
    store.on('ready', () => ({ ready: true }))
}

export const AppStore: Store<AppState, AppEvents> = {
    keys: Object.keys(state) as Array<keyof AppState>,
    module: appModule
}
