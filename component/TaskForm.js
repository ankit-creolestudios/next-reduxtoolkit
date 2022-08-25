import React, { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");
  return (
    <div>
      TaskForm
      <div>
        <form>
          <div>
            <input
              type={"text"}
              name="task"
              
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
