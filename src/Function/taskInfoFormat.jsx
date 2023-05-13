export function taskInfoFormat(taskInfo) {
  //three kinds of tags are selected, one is a string, the others are an object.
  //e.g. "tag1", {"title":tag2} and { inputValue: 'tag3', title: 'Add "tag3"' }
  if (!taskInfo) return taskInfo;
  if (taskInfo.inputValue) {
    taskInfo = { title: taskInfo.inputValue };
  } else if (typeof taskInfo === "string") {
    taskInfo = { title: taskInfo };
  } else if (Array.isArray(taskInfo) === true) {
    //multiple tags are selected and saved as an array
    taskInfo = taskInfo.map((element) => {
      if (element.inputValue) {
        return { title: element.inputValue };
      } else if (typeof element === "string") {
        return { title: element };
      } else {
        return element;
      }
    });
  }
  return taskInfo;
}
