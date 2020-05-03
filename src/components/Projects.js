import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { IndividualProject } from "./individualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectid}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectid
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectid);
            setSelectedProject(project.projectid);
          }}
          onKeyDown={() => {
            setActive(project.projectid);
            setSelectedProject(project.projectid);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
