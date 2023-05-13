export default function InputWithWarning(input, notIntialRender) {
  if (input.input === null && !notIntialRender) {
    //This is the first render && input is null
    notIntialRender = true;
    return;
  }

  return (
    <div style={{ marginLeft: "10px", marginBottom: 0 }}>
      {!input.input && (
        <p style={{ color: "red", lineHeight: 0, fontSize: "10px" }}>
          Please type a word!
        </p>
      )}
    </div>
  );
}
