import React, { useEffect } from "react";

import { useTasks } from "../hooks/index";
import { Checkbox } from "./Checkbox";
import { collectedTask } from "../constants";
import { getTitle, getCollectedTitle, collectedTasksExits } from "../helpers";
import {
  useSelectedProjectValue,
  useProjectValue,
  SelectedProjectContext,
  useProjectsValue,
} from "../context";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  const projectName = "";

  if (projects && selectedProject && !collectedTasksExits(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }
  if (collectedTasksExits(selectedProject) && selectedProject) {
    projectName = getCollectedTitle(collectedTask, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}:Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
