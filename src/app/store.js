import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { loadStateFromLocalStorage } from "../util/loadStateFromLocalStorage";
import { saveStateToLocalStorage } from "../util/saveStateToLocalStorage";

// export const store = configureStore({
//     reducer: todoReducer
// });

export const store = configureStore({
    reducer: todoReducer,
    preloadedState: loadStateFromLocalStorage(), // Load state from local storage
  });
  
  store.subscribe(() => {
    saveStateToLocalStorage(store.getState()); // Save state to local storage whenever it changes
  });
  
