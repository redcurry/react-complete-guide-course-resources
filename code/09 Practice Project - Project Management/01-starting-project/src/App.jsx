import { useState } from "react";
import NoProjectsSelected from "./components/NoProjectsSelected";
import Sidebar from "./components/Sidebar";
import EditProject from "./components/EditProject";
import Tasks from "./components/Tasks";

const DETAIL_VIEW_NONE_SELECTED = "none-selected";
const DETAIL_VIEW_EDIT = "edit";
const DETAIL_VIEW_TASKS = "tasks";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [detailViewType, setDetailViewType] = useState(
    DETAIL_VIEW_NONE_SELECTED,
  );

  function addProject() {
    setDetailViewType(DETAIL_VIEW_EDIT);
  }

  function onCancelAddProject() {
    setShowEditProject(DETAIL_VIEW_NONE_SELECTED);
  }

  function onSaveProject(projectInput) {
    setProjects((prevProjects) => {
      return [...prevProjects, projectInput];
    });
    setDetailViewType(DETAIL_VIEW_NONE_SELECTED);
  }

  function onProjectSelected(id) {
    setSelectedProjectId(id);
    setDetailViewType(DETAIL_VIEW_TASKS);
  }

  function onAddTask(title) {
    setProjects((prevProjects) => {
      return prevProjects.map((p) =>
        p.id === selectedProjectId ? { ...p, tasks: [...p.tasks, title] } : p,
      );
    });
  }

  function onDeleteTask(index) {
    setProjects((prevProjects) => {
      return prevProjects.map((p) =>
        p.id === selectedProjectId
          ? { ...p, tasks: p.tasks.filter((_, i) => i !== index) }
          : p,
      );
    });
  }

  function onDeleteProject() {
    setDetailViewType(DETAIL_VIEW_NONE_SELECTED);
    setProjects((prevProjects) => {
      return prevProjects.filter((p) => p.id != selectedProjectId);
    });
    setSelectedProjectId(null);
  }

  function detailView() {
    if (detailViewType === DETAIL_VIEW_EDIT)
      return (
        <EditProject onCancel={onCancelAddProject} onSave={onSaveProject} />
      );
    else if (detailViewType === DETAIL_VIEW_TASKS) {
      return (
        <Tasks
          project={projects.find((p) => p.id === selectedProjectId)}
          onDeleteProject={onDeleteProject}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      );
    } else return <NoProjectsSelected onAddProject={addProject} />;
  }

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar
        onAddProject={addProject}
        projects={projects}
        onSelected={onProjectSelected}
      />
      <main className="w-1/2">{detailView()}</main>
    </div>
  );
}

export default App;

/**
 *   Project's management application
 *   ==================================
 *   1) Build SideBar and Content components
 *      # Sidebar
 *      - Show a list of projects
 *      - Have an "Add Project" button that navigates
 *        to form to add to the list of project
 *      - List of projects should be navigatable to the
 *        project detail view
 *      # Content
 *      - main content window where you will display projects
 *      - should show fallback when there is no project to display
 *      - fallback should have a button to navigate to the
 *        new project form
 *   2) Project Detail components
 *      # New Project Form
 *      - a form to add a new project
 *      - should have a "title", "description", & "due date" fields
 *      - ultimately update your state in the App component with
 *        the new project information
 *      # Project Detail component
 *      - show the title and description of the project along
 *        with the due date of the project
 *      - show a delete button and handle the deletion
 *      # Tasks component
 *      - nested in the detail view
 *      - Show a list of tasks associated with the project
 *      - Facilitate the adding/removal of tasks through a
 *        form and button respectively
 *      - Again manage your tasks state associated with each
 *        project, likely in the App component as well
 */
