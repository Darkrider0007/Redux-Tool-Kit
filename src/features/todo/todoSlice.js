import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Todos goes here", isEditable: false, completed: false }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log(id, text);
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.isEditable = false;
      }
    },
    editableTodo: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isEditable = true;
        //console.log(todo.isEditable);
      }
    },
    toggleComplete: (state, action) => {
        const id = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, editableTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
