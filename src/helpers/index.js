import { collectedTask } from "../constants/index";

export const collectedTasksExist = selectProject =>
  collectedTask.find(task => task.key === selectProject);
