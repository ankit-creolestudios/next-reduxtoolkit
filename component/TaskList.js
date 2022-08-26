import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readTask } from "../redux/feature/taskSlice";

const TaskList = () => {
  // const dispatch = useDispatch();
  const task = useSelector((state) => state.task.tasks);

  // useEffect(() => {
  //   dispatch(readTask());
  // }, []);
  console.log(task);
  return (
    <div>
      <div>
        <h3>My Task</h3>
      </div>
      <div>
        {task &&
          task.map((item, index) => (
            <div key={item._id}>
              {index + 1} {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
