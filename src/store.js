import { configureStore } from '@reduxjs/toolkit'
// REDUCER_IMPORTS
import NotFoundReducer from './Containers/NotFound/NotFoundSlice.js';
import HomeReducer from './Containers/Home/HomeSlice.js';

export const store = configureStore({
    reducer: {
        // REDUCERS
        NotFound : NotFoundReducer,
        Home: HomeReducer,
    },
})