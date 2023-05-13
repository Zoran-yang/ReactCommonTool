import delTaskData from "./delTaskData";

export default async function deleteConfirmation(
  target,
  delKey,
  setIsMistake,
  isMistake,
  handleDeletedSituation,
  originalTaskInfos
) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this permanently?"
  );
  if (confirmed) {
    // User clicked "OK" in the confirmation dialog
    await delTaskData(target, delKey, setIsMistake);
    if (isMistake) return;
    handleDeletedSituation(delKey, originalTaskInfos);
  } else {
    // User clicked "Cancel" in the confirmation dialog
    // Do nothing, or optionally display a message
  }
}
