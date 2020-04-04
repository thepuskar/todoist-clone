import { useState, useEffect } from "react";
import { firebase } from "../firebase";

const collectedTasksExist = () => {};

export const useTask = selectedProject => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "xD54Q3dGwp58SSim6ndf");

    unsubscribe =
      selectedProject && !collectedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, []);
};
