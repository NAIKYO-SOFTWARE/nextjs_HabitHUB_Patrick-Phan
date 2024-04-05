// we have color, note's content to be saved to redux global
"use client";

import { useDispatch } from "react-redux";
import {
  dispatchDeleteMemo,
  dispatchToggleComplete,
} from "@/redux/store/store";
import { Box, Typography } from "@mui/material";

interface IEachUsersMemo {
  id: number;
  note: string;
  color: string;
  complete: boolean;
}

export const EachUsersMemo: React.FC<IEachUsersMemo> = ({
  id,
  note,
  color,
  complete,
}) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatchToggleComplete(id, dispatch);
  };

  const deleteThisNote = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatchDeleteMemo(id, dispatch);
    }
  };

  return (
    <div key={id} className="flex w-[340px] mt-[13px] shadow-lg rounded-l-md">
      <Box
        onClick={toggleComplete}
        sx={{
          backgroundColor: color,
          width: "100%",
          height: "90px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {complete ? (
          <Typography
            variant="h6"
            sx={{ ml: 2, textDecoration: "line-through" }}
          >
            {note}
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ ml: 2 }}>
            {note}
          </Typography>
        )}
      </Box>

      <div
        onClick={deleteThisNote}
        className="cursor-pointer absolute flex justify-center text-[21px] text-white px-[4px] rounded bg-red-500 w-[27px] h-fit"
      >
        X
      </div>
    </div>
  );
};
