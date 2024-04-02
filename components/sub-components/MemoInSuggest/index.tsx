import React from "react";
import { useDispatch } from "react-redux";
import { dispatchAddMemo, dispatchToggleComplete } from "@/redux/store/store";
import { Box, Button, Container, Typography } from "@mui/material";

// interface đóng vai trò như blueprint của props truyền vào
interface IMemoSugProps {
  id: number;
  color: string;
  note: string;
}

const MemoInSuggestions: React.FC<IMemoSugProps> = ({ id, color, note }) => {
  const dispatch = useDispatch();

  const addMemo = () => {
    dispatchAddMemo(color, note, dispatch);
  };

  const toggleComplete = () => {
    dispatchToggleComplete(id, dispatch);
  };

  return (
    <div key={id} className="flex justify-between w-[380px] mt-[13px]">
      <Box
        onClick={toggleComplete}
        sx={{
          backgroundColor: color,
          width: "320px",
          height: "90px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography variant="h6" sx={{ ml: 2 }}>
          {note}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={addMemo}
          variant="contained"
          sx={{
            height: "40px",
            width: "40px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d3d3d3",
            borderRadius: "50%",
            color: "black",
            "&:hover": {
              backgroundColor: "#d3d3d3",
            },
          }}
        >
          +
        </Button>
      </Box>
    </div>
  );
};

export default MemoInSuggestions;
