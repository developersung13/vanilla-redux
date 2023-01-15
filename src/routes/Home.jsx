import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
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
        <ul>{JSON.stringify(toDos)}</ul>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
