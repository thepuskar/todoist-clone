import React, { useState } from "react";
import moment from "moment";
import { firebase } from "../firebase";

import { FaRegListAlt, FaRegcalendarAlt } from "react-icons/fa";

import { useSelectedProjectValue } from "../context";

export const AddTask = ({
  showAddTaskMain = true,
  showShouldMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) => {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDAte] = useState("");
  const [project, setProject] = useState("");
  const [showMain, setShowMain] = useState(showShouldMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);

  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const projectid = project || selectedProject;
    let collatedDate = "";

    if (projectid === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (projectid === "NEXT_7") {
      collatedDate = moment().add(7, "days").format("DD/MM/YYYY");
    }
    return (
      task &&
      projectid &&
      firebase
        .firestore()
        .collection("task")
        .add({
          archived: false,
          projectid,
          task,
          date: collatedDate || taskDate,
          userid: "xD54Q3dGwp58SSim6ndf",
        })
        .then(() => {
          setTask("");
          setProject("");
          setShowMain("");
          setShowProjectOverlay(false);
        })
    );
  };

  return (
    <div
      className={showQuickAddTask ? "add-task__overlay" : "add-task"}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowMain(!showMain)}
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showMain || setShowQuickAddTask) && (
        <div className="add-task__main" data-testid="add-task-main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Qucik Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                >
                  X
                </span>
              </div>
            </>
          )}
          <p>Project overlay here</p>
          <p>Project date here</p>
          <input
            className="add-task__content"
            data-testid="add-task-content"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
