import { useEffect, useState } from "react";

const EditTask = ({task,
    taskList,
    setTaskList}) => {
  const [editModal, setEditModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

useEffect(()=> {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
},[])

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "projectName") setProjectName(value);
    if (name === "taskDescription") setTaskDescription(value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1);
    setTaskList([...taskList, { projectName, taskDescription }]);
    setEditModal(false);
    setProjectName("");
    setTaskDescription("");
  };
  return (
    <>
      <button className="ml-32 bg-gray-400 text-white text-sm uppercase font-semibold py-1 px-7 rounded-lg"
     onClick={()=> setEditModal(true)} >
        Edit
      </button>
      {editModal ? (
        <>
          <button
            className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
            type="button"
            onClick={() => setEditModal(true)}
          >
            +New
          </button>
          {editModal ? (
            <>
              <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">
                  <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                    <h3 className="bg-white text-3xl font-semibold">Add New Task</h3>
                    <button
                      className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                      onClick={() => setEditModal(false)}
                    >
                      X
                    </button>
                  </div>
                  <form className="px-6 pt-6 pb-4">
                    <div>
                      <label
                        htmlFor="project-name"
                        className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                      >
                        Project Name
                      </label>
                      <input
                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        id="project-name"
                        name="projectName"
                        placeholder="Project name"
                        value={projectName}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="task-description"
                        className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                      >
                        Task Description
                      </label>
                      <textarea
                        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                        id="task-description"
                        name="taskDescription"
                        placeholder="Task description"
                        rows="5"
                        value={taskDescription}
                        onChange={handleInput}
                      ></textarea>
                    </div>
                  </form>
                  <div className="flex justify-end p-6 border-t border-slate-200 rounded">
                    <button
                      className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
                      onClick={handleUpdate}
                    >
                      Update Task
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default EditTask;