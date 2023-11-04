# Redux Tool Kit 
`redux-tool-kit` is a javascript library (Not a proprietary for `React`). It is wired up with react application by `react-redux`. Basically, we start to building our application to creating the the store.
```
|
|--src
|   |--app
|   |   |--store.js
|   |   |
|

```
In the `store.js` file create the store by `configureStore({})`

### store.js
```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({});
```

Next create a `features` folder in the src directory. In `features` file create a new folder `todo` and inside `todo` create the `todoSlice.js` folder. 

```
|
|--src
|   |--app
|   |  |--store.js
|   |   
|   |--features   
|   |  |--todo
|   |  |  |--todoSlice.js 
|

todoSlice.js (it is crated according to the naming convention of redux tool kit)

```

### todoSlice.js
```js
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[{id:1, text:"Learn Redux"}]
}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state,action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
```

export the `todoSlice`. It has the name (use as it is), initialState and reducers. Reducers are the function. It provides the methods basically two properties `state and action`
. `state` holds the previous state and `action` has the parse data and it does the task using `action.payload.<value_goes_here>` 
Next export the methods using `todoSlice.actions` and also export the `todoSlice.reducer` to connect with the `store.js`

### store.js
```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});
```

## useSelector and useDispatch
`useSelector and useDispatch` are the two function provided by react-redux. Its connects the redux-tool-kit with the redux.

```js
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';

export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
  return (
    <>
 
    </>
  )
}

```

```
dispatch --> reducer --> store
```