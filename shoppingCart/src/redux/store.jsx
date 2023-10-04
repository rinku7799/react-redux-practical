

import { configureStore } from '@reduxjs/toolkit';
import reducers from './combinereducer';

export const store = configureStore({
    reducer: reducers
});