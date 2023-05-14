import fetchToServer from "./fetchToServer.jsx";

export default async function delTaskData(
  target,
  delKey,
  // Mistake Warning
  setIsMistake = (info) => {
    info ? console.log("delTaskData", info) : null;
  }
) {
  switch (target) {
    case "TaskSOP":
      return await deleteSop(target, delKey, setIsMistake);
    case "taskTypes":
      return await deleteTaskType(target, delKey, setIsMistake);
    case "taskNames":
      return await deleteTaskName(target, delKey, setIsMistake);
    case "taskTags":
      return await deleteTaskTag(target, delKey, setIsMistake);
    default:
      console.log("delTaskData: target not found");
  }
}

async function deleteTaskType(target, id, setIsMistake) {
  let serverResponseHandle = async (res) => {
    setIsMistake(false);
    return await res.json();
  };
  let serverErrorHandle = async (res) => {
    res = await res.json();
    if ((res = "Task type is not deleted")) {
      setIsMistake("Task type is not deleted");
    }
    throw new Error("Request failed.");
  };
  return fetchToServer(
    "deleteTaskInfos",
    {
      id: "zoran",
      deletedInfo: {
        requestType: target,
        id: id,
      },
    },
    serverResponseHandle,
    serverErrorHandle
  );
}

async function deleteTaskName(target, id, setIsMistake) {
  let serverResponseHandle = async (res) => {
    setIsMistake(false);
    return await res.json();
  };
  let serverErrorHandle = async (res) => {
    res = await res.json();
    if ((res = "Task name is not deleted")) {
      setIsMistake("Task name is not deleted");
    }
    throw new Error("Request failed.");
  };
  return fetchToServer(
    "deleteTaskInfos",
    {
      id: "zoran",
      deletedInfo: {
        requestType: target,
        id: id,
      },
    },
    serverResponseHandle,
    serverErrorHandle
  );
}

async function deleteTaskTag(target, id, setIsMistake) {
  let serverResponseHandle = async (res) => {
    setIsMistake(false);
    return await res.json();
  };
  let serverErrorHandle = async (res) => {
    res = await res.json();
    if ((res = "Task name is not deleted")) {
      setIsMistake("Task name is not deleted");
    }
    throw new Error("Request failed.");
  };
  return fetchToServer(
    "deleteTaskInfos",
    {
      id: "zoran",
      deletedInfo: {
        requestType: target,
        id: id,
      },
    },
    serverResponseHandle,
    serverErrorHandle
  );
}

async function deleteSop(target, sopId, setIsMistake) {
  let serverResponseHandle = async (res) => {
    setIsMistake(false);
    return await res.json();
  };
  let serverErrorHandle = async (res) => {
    res = await res.json();
    if ((res = "SOP is not deleted")) {
      setIsMistake("SOP is not deleted");
    }
    throw new Error("Request failed.");
  };
  return fetchToServer(
    "deleteTaskInfos",
    {
      id: "zoran",
      deletedInfo: {
        requestType: target,
        sopId: sopId,
      },
    },
    serverResponseHandle,
    serverErrorHandle
  );
}
