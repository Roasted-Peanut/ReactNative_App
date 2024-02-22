import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector as useReduxSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import reducers, { persistConfig } from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(sagaMiddleware)

const persistedReducer = persistReducer<any, any>(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(middlewareEnhancer),
});

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppState = typeof store.getState
export type RootState = ReturnType<AppState>
export const useAppDispatch: () => AppDispatch = useDispatch

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export { store, persistor }

