import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditTaskPopUp from "../modals(pop-ups)/EditTaskPopUp";
import { useState } from "react";

function TaskCard({ taskObj, index, deleteTask, updateListArray }) {
  const [modal, setModal] = useState(false);
  const colors = [
    { primaryColor: "#F0E68C", secondaryColor: "#FFFACD" },
    { primaryColor: "#9370DB", secondaryColor: "#E6E6FA" },
    { primaryColor: "#6495ED", secondaryColor: "#B0C4DE" },
    { primaryColor: "#2E8B57", secondaryColor: "#8FBC8F" },
    { primaryColor: "#FFC0CB", secondaryColor: "#FFF0F5" },
  ];
  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <div className="card-container">
      <div
        className="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ "background-color": colors[index % 5].secondaryColor }}
        >
          {taskObj.Name}
        </span>
        <p className="task-description">{taskObj.Description}</p>

        <div
          className="icons"
          style={{ color: colors[index % 5].primaryColor }}
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit-task"
            onClick={() => setModal(true)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-task"
            onClick={handleDelete}
          />
        </div>
      </div>
      <EditTaskPopUp
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
}
export default TaskCard;
