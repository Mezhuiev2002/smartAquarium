import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from './reducers/getData'
import foodReducer from './reducers/setFood'

const rootReducer = combineReducers({
    dataReducer, 
    foodReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })

}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']