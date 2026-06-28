import { useRef } from "react";

export default function EditProject({ onCancel, onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function getProjectInput() {
    return {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: [],
    };
  }

  return (
    <div className="w-full mx-4">
      <div className="flex justify-end">
        <button className="mt-2 px-7 py-3.5 rounded-xl" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="mt-2 bg-neutral-900 hover:bg-neutral-700 text-white px-7 py-3.5 rounded-xl"
          onClick={() => onSave(getProjectInput())}
        >
          Save
        </button>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>Title</label>
        <input ref={titleRef} type="text" />

        <label>Description</label>
        <textarea ref={descriptionRef}></textarea>

        <label>Due Date</label>
        <input ref={dueDateRef} type="date" />
      </div>
    </div>
  );
}
