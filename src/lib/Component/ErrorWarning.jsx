export default function ErrorWarning({ error }) {
  console.log("ErrorWarning", "error", error);
  switch (error) {
    case "Task type or task name is empty":
      return (
        <p style={{ color: "red", lineHeight: 0, fontSize: 15 }}>
          Check blank row
        </p>
      );
    case "This SOP already exist, please revise SOP informaton": // for reviseSop
      return (
        <p style={{ color: "red", lineHeight: 0, fontSize: 10 }}>
          This SOP already exist, please revise SOP informaton
        </p>
      );
    case "This SOP already exist, please add another SOP infomation": //for updateSop
      return (
        <p style={{ color: "red", lineHeight: 0, fontSize: 10 }}>
          This SOP already exist, please add another SOP infomation
        </p>
      );
    case "task tag is empty": // for "ReviseTaskTag"
      return (
        <p style={{ color: "red", lineHeight: 0, fontSize: 10 }}>
          task tag is empty
        </p>
      );
  }
}
