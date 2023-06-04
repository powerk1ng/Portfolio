import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TodoItem from "./TodoItem";
import TodoBtn from "./TodoBtn";
import SortTodos from "./SortTodos";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );



  const addTask = () => {
    if (value.trim().length > 0) {
      setTodoList([
        ...todoList,
        { id: nanoid(), todoValue: value, completed: false },
      ]);
    } else {
      alert("Add todo before submitting");
    }
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleTodoValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <SortTodos />

      <div className=" border-2 w-full rounded-md shadow-md shadow-black/80 p-5 bg-black/50 min-h-[500px] max-w-[650px] mx-auto mt-20">

        {/* todo top */}
        <motion.div 
          initial={{opacity: 0, y: -200}}
          animate={{opacity:100, y:0, transition: {duration:2, delay:0.5}}}
          className="flex z-10">
          <motion.input drag
            onChange={handleTodoValue}
            value={value}
            placeholder="Add Todo"
            className="py-2 rounded-md flex-1 rounded-r-none px-2 outline-none text-black"
          />
          <TodoBtn 
            drag
            onClick={addTask}
            className={`px-5 py-2 text-white hover:brightness-125 duration-300 ${
              value.length === 0 ? "bg-red-400" : "bg-green-400"
            }`}
          >
            Add todo
          </TodoBtn>
        </motion.div>

        {/* divider */}
        <motion.hr 
          initial={{width: 0, opacity: 0}}
          animate={{width: '100%', opacity:100, transition: {duration: 4, delay: .2, type: 'spring', damping: 6}}}
          className="h-2 my-4 bg-gradient-to-r from-purple-500 via-red-700 to-emerald-500" />

        {/* todo body */}
        {todoList.length > 0 ? (
          <div className="flex mt-4 flex-col gap-y-2">
            {todoList.map((todo, index) => (
              <TodoItem
                key={todo.id}
                {...todo}
                todoList={todoList}
                setTodoList={setTodoList}
                index={index}
              />
            ))}
          </div>
        ) : (
    
          <motion.div 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 100, y:0, transition: {duration: 2, delay: 0.5}}}
            className="font-bold text-[32px] bg-gradient-to-r from-red-800 via-indigo-500 to-green-500 bg-clip-text text-transparent italic text-center mt-20">
            No Todos Yet! Go Ahead and Add One
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Todo;
