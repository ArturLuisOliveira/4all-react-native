import { createContext } from 'react';
import initialState from './initialState';

const CommonContext = createContext(initialState);
export default CommonContext;
