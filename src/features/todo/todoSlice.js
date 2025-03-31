import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo_task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //passing two arguments state, action
    addTodo: (state, action) => {
      //reducer 1st
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo); //direct mutation
    },
    deleteTodo: (state, action) => { //reducer 2nd
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => { //reducer 3rd
      state.todos = state.todos.map((todo) => { //map function return new array
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer; //export all individual reducers