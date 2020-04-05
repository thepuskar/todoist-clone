import { collectedTask } from "../constants/index";

export const collatedTasksExist = (selectProject) =>
  collectedTask.find((task) => task.key === selectProject);
