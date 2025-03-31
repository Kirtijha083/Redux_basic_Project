import { configureStore } from '@reduxjs/toolkit' 
import todoReducre from "../features/todo/todoSlice";

export const store = configureStore({ 
  reducer: todoReducre,  
});