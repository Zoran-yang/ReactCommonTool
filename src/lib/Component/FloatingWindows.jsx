import * as React from "react";
import Paper from "@mui/material/Paper";

function FloatingWindow({ children, isOpen, backgroundColor }) {
  return (
    <div>
      {isOpen && (
        <Paper
          sx={
            backgroundColor
              ? {
                  position: "absolute",
                  top: "57%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: backgroundColor,
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                  width: "65%",
                }
              : {
                  position: "absolute",
                  top: "57%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                  width: "65%",
                }
          }
        >
          {children}
        </Paper>
      )}
    </div>
  );
}

export default FloatingWindow;
