export default function getTaskNames(newValue, handleTaskNames) {
  // get task names from server
  fetch("http://localhost:3000/getTaskInfos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: "zoran",
      requestInfo: {
        requestType: "taskNames",
        taskType: newValue,
      },
    }),
  })
    .then(async (res) => {
      if (res.ok) {
        return handleTaskNames(await res.json());
      } else {
        console.log(await res.json());
        throw new Error("Request failed.");
      }
    })
    .catch(console.log);
}
