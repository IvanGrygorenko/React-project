import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import selectedReducer from './selectedReducer'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedSelectedReducer = persistReducer(persistConfig, selectedReducer)

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        selected: persistedSelectedReducer,

    },
})

export const persistor = persistStore(store)