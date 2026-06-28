export default function NoProjectsSelected({ onAddProject }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h3>No Projects Selected</h3>
      <p className="text-gray-500">
        Select a project or get started with a new one
      </p>
      <button
        className="mt-2 bg-neutral-900 hover:bg-neutral-700 text-white px-7 py-3.5 rounded-xl"
        onClick={onAddProject}
      >
        Create new project
      </button>
    </div>
  );
}
