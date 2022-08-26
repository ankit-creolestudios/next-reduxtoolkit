import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/feature/taskSlice";
import TaskList from "./TaskList";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
    };
    if (formData.title !== "") {
      dispatch(createTask(formData));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="task_form">
      <div className="container">
        <div>
          <div>
            <h3>Task</h3>
          </div>
          <input
            type={"text"}
            name="task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="task_list">
          <TaskList />
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
