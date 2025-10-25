import { useEffect, useRef, useState } from "react";
import './styles/custom.css';
import Add from './assets/plus-white.png';
import Close from './assets/close.png';
function App() {
  const [todoInput, setTodoInput] = useState("");
  const [inputList, setInputList] = useState(()=> {
    return JSON.parse(localStorage.getItem("todoList")) || [];
  });
  const [todoCount, setTodoCount] = useState(()=>{
    return JSON.parse(localStorage.getItem("todoListCount")) || 0;
  });

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const addNewList = () => {
    if (todoInput === "") {
      return console.log("Input is empty");
    }
    setInputList((prev)=>{
      const StoreData = [...prev, { text: todoInput, isCompleted: false }]
      localStorage.setItem("todoList", JSON.stringify(StoreData));
      return StoreData;
    });
    setTodoInput("");
  }

  const handleCheckboxChange = (index) => {
    setInputList(prev => {
      const updatedList = prev.map((item, idx) => {
        if (idx === index) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
      localStorage.setItem("todoList", JSON.stringify(updatedList));
      return updatedList;
    });
  }


  const deleteTodo = (deleteIndex) => {
  setInputList(prev => {
    const updatedList = prev.filter((_, id) => id !== deleteIndex);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    // console.log(updatedList.length);
    return updatedList;
  });
}
 
  useEffect(() => {
    setTodoCount(()=>{
      localStorage.setItem("todoListCount", JSON.stringify(inputList.length));
      return inputList.length;
    });
  }, [inputList]);

  return (
    <>
      <div className="o-container">
        <h1 className="o-heading">Your To-Do</h1>
        <div className="o-input-container">
          <textarea style={{height:45}} className="o-input" placeholder="Add New Task" onChange={handleInputChange} type="text" value={todoInput} />
          <button className="o-addBtn" onClick={addNewList}>
            <img src={Add} width={21} height={21} alt="Add" />
          </button>
        </div>
        <div className="o-list-container">
          {inputList && inputList.map((item, index) => {
            return (
              <div className="o-todoList" key={index} style={{ opacity: item.isCompleted ? 0.3 : 1 }}>
                <div><input onChange={() => handleCheckboxChange(index)} type="checkbox" checked={item.isCompleted || false} /></div>
                <div style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.text}</div>
                <button className="o-closebtn" onClick={()=>deleteTodo(index)}>
                   <img src={Close} width={20} height={20} alt="Add" />
                </button>
              </div>
            )
          })}
          <p><i>Todo List: {todoCount}</i></p>
        </div>
      </div>


    </>
  );
}

export default App;