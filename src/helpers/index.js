import {collectedTasksExist} from "../constants"

export const collectedTasksExist = selectProject =>
    collectedTasksExist.find(task => task.key === selectProject);
