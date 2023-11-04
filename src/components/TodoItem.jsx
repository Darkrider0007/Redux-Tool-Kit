/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { deleteTodo, editableTodo, toggleComplete } from '../features/todo/todoSlice';
import toast from 'react-hot-toast';


export default function TodoItem({ todo }) {


    const dispatch = useDispatch();
    const toggleCompleteHandler = () => {
        dispatch(toggleComplete(todo.id))
        if(!todo.completed) toast.success('😊 1 Todo Done!')
    }
    const deleteTodoHandler = () => {
        dispatch(deleteTodo (todo.id))
        toast('1 Todo Deleted!', {
            icon: '🗑️',
          });
    }

    return (
        <>
            <div className={`w-full flex flex-row items-center justify-between border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
            ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}>
                <div className='flex flex-row gap-4'>
                    <input
                        type='checkbox'
                        className="cursor-pointer"
                        checked={todo.completed}
                        onChange={toggleCompleteHandler}
                    />
                    <div className={`text-xl ${todo.completed ? "line-through" : ""}`}>
                        {todo.text}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button
                        onClick={() => dispatch(editableTodo(todo.id))}
                        className="inline-flex w-8 h-8 rounded border-0 py-1 px-4 focus:outline-none text-md border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    >
                        ✏️
                    </button>
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                        onClick={deleteTodoHandler}
                    >
                        ❌
                    </button>
                    
                </div>
            </div>
        </>
    )
}
