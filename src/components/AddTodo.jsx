import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';
import toast from 'react-hot-toast';

export default function AddTodo() {
    const [input, setInput] = useState("")
    const [edit, setEdit] = useState(false)
    const [updatedTodoId, setUpdatedTodoId] = useState();
    const [updatedTodoText, setUpdatedTodoText] = useState("");
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    useEffect(() => (
        todos.forEach((todo) => {
            if (todo.isEditable === true) {
                setUpdatedTodoId(todo.id);
                setUpdatedTodoText(todo.text);
                setEdit(true);
                console.log(edit);
            }
          })
    ),[todos])     

    const TodoHandler = (e) => {
        e.preventDefault();
        if (edit) {
            console.log(updatedTodoId);
            setEdit(() =>  false)
            dispatch(updateTodo({ id: updatedTodoId, text: updatedTodoText }));
            setUpdatedTodoText("")
        }else{
            if(input === "") return toast.error("Please enter a todo")
            else dispatch(addTodo(input))
        }
        console.log(edit);
        setInput("")
    }
  return (
    <>
        <form onSubmit={TodoHandler} className="space-x-3 mt-6 flex items-center justify-center">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={ edit ? updatedTodoText : input }
                onChange={(e) => (edit ? setUpdatedTodoText(e.target.value) :setInput(e.target.value))}
            />
            {edit ? (
                <button
                    type="submit"
                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                    Edit
                </button>
            ) : (
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add
                </button>
            )}
        </form>
    </>
  )
}
