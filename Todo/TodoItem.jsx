import { useState, useRef, useMemo } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";

const TodoItem = ({ todoValue, id, todoList, setTodoList, index }) => {
  const inpRef = useRef(null);
  const [disabledBtn, setDisabledBtn] = useState(true);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomColor = useMemo(() => {
    return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )})`;
  }, []);

  const setDisableBtn = () => {
    if (todoValue.trim().length > 0) setDisabledBtn(!disabledBtn);
    if (disabledBtn) inpRef.current.focus();
  };

  const changeTodoValue = (e, id) => {
    const newTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, todoValue: e.target.value } : todo
    );
    setTodoList(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todoList.filter((item) => item.id !== id);
    disabledBtn
      ? setTodoList(newTodos)
      : alert("Todo cannot be deleted while being edited.");
  };

  return (
    <AnimatePresence
      exit={{ opacity: 0, transition: { duration: 5, delay: 4 } }}
    >
      <motion.div
        initial={{ opacity: 0, y: -index * 50 }}
        animate={{
          opacity: 100,
          y: 0,
          transition: {
            duration: 0.4,
            delay: index * 0.2,
            type: "spring",
            damping: 7,
          },
        }}
        exit={{ opacity: 0, transition: {duration: 4, delay: 3} }}
        className="flex items-center"
      >
        <span className={`font-bold`} style={{ color: `${randomColor}` }}>
          {index + 1})
        </span>
        <input
          onChange={(e) => changeTodoValue(e, id)}
          readOnly={disabledBtn ? true : false}
          ref={inpRef}
          value={todoValue}
          placeholder={`${todoValue.length > 0 ? "" : "Todo cannot be empty"}`}
          className={`py-2 ml-2 rounded-md flex-1 rounded-r-none px-2 outline-none text-black ${
            disabledBtn
              ? "bg-gray-400 cursor-default"
              : "placeholder:text-red-500 placeholder:font-semibold"
          }`}
        />
        <button
          onClick={setDisableBtn}
          className={`w-[100px] py-2 text-white hover:brightness-125 duration-300 ${
            disabledBtn ? "bg-orange-400" : "bg-blue-400"
          }`}
        >
          {!disabledBtn ? "Save" : "Edit"}
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 duration-300 py-2 px-2"
          onClick={() => deleteTodo(id)}
        >
          <TiDeleteOutline size={24} fill="black" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default TodoItem;
