import { useSelector } from 'react-redux'
import { AddTodo, TodoItem } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      <div><Toaster/></div>
      <div className="flex items-center justify-center">
        <div className="w-5/6 md:w-1/2">
        <h1 className="text-3xl font-bold text-center mb-2 mt-4">Manage Your Todos</h1>
          <AddTodo />
          <div className='flex justify-center text-4xl m-4 text-[#ccbed7]'>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex"
                        key={todo.id}
                    >
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
          
        </div>
      </div>
    </>
  )
}

export default App
