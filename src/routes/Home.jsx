import { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => setText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
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
        <ul></ul>
      </form>
    </div>
  );
}

export default Home;
