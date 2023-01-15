import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => setText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Write to do"
          value={text}
          onChange={onChangeHandler}
        />
        <button>Add</button>
        <ul>{JSON.stringify(toDos)}</ul>
      </form>
    </div>
  );
}

export default Home;
