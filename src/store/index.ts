import { provideStoreon, useStoreon } from '@storeon/svelte'
import { createStoreon, StoreonModule } from 'storeon'
import { setContext } from 'svelte'

import { AppStore, AppEvents, AppState } from './app.store'
import { UserStore, UserState, UserEvents } from './user.store'

export type Store<S, E> = {
    keys: (keyof S)[]
    module: StoreonModule<S, E>
}

type Events = AppEvents & UserEvents
type State = AppState & UserState

export const stores = {
    user: UserStore,
    app: AppStore
}

// 创建Store
export const store = createStoreon<State, Events>(
    Object.values(stores).map((s) => s.module)
)

/**
 * 使用Store
 * @param store
 * @returns
 */
export function useStore<S, E>(select: (s: typeof stores) => Store<S, E>) {
    return useStoreon<S, E>(...select(stores).keys)
}

/**
 * 注入Store
 */
export function provideStore() {
    provideStoreon(store)
}
