
// import { createStore } from 'redux';
// import counterReducer from './reducer';
import {  configureStore } from '@reduxjs/toolkit'
import reducer from '../redux-counter/conbinereducer';

const store =  configureStore({reducer:reducer});

export default store;