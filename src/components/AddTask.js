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
  const [showProjectOverlay, setShowProjectOverlay] = useState(fasle);
  const [showTaskDate, setShowTaskDate] = useState(fasle);

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
          projectid ,
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

  return <p>Stop</p>;
};
