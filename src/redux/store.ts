import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector as useReduxSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import reducers, { persistConfig } from "./reducers";
import { pokemonApi } from "./slices/userSlice";

// const sagaMiddleware = createSagaMiddleware();

// const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const persistedReducer = persistReducer<any, any>(persistConfig, reducers);

//add middleware saga
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false, thunk: false }),
//   enhancers: (getDefaultEnhancers) =>
//     getDefaultEnhancers().concat(middlewareEnhancer),
// });

// default use thunk
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(pokemonApi.middleware),
});

// sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store.getState;
export type RootState = ReturnType<AppState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export { store, persistor };
