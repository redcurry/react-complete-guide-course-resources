export default function Sidebar({ onAddProject, projects, onSelected }) {
  return (
    <aside className="w-64 bg-neutral-900 text-white flex flex-col gap-4 p-6">
      <h2 className="uppercase">Your Projects</h2>
      <button
        className="flex items-center w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-4 py-2.5 rounded-lg transition-colors"
        onClick={onAddProject}
      >
        + Add Project
      </button>
      {projects.map((p) => (
        <button key={p.id} onClick={() => onSelected(p.id)}>
          {p.title}
        </button>
      ))}
    </aside>
  );
}
