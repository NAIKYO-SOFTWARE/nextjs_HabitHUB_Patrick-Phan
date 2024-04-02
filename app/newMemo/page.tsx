"use client";

import Menu from "@/components/Menu";
import StyledButton from "@/components/sub-components/Button/Button";
import { dispatchAddMemo } from "@/redux/store/store";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

const NewMemo = () => {
  enum Colors {
    // blue = "#01579b",
    white = "#fff",
    teal = "#1de9b6",
    pink = "#ad1457",
    red = "#c62828",
    cyan = "#00e5ff",
    lime = "#cddc39",
    orange = "#e65100",
    green = "#00c853",
    deepPurpil = "#6200ea",
  }
  const [color, setColor] = useState("#ffffff");
  const [note, setNote] = useState("");
  const [isClicked, setIsclicked] = useState(false);

  const handleColorChange = (color: any) => {
    setColor(color);

    setIsclicked(true);
  };

  useEffect(() => {
    console.log("color: ", color);
    console.log("note: ", note);
  }, [color, note]);

  const dispatch = useDispatch();

  const addMemo = () => {
    if (note === "") {
      alert("You must type!");
    } else {
      dispatchAddMemo(color, note, dispatch);
    }
  };

  return (
    <div className="w-[430px] m-auto bg-[#bde0fe] h-screen">
      <div className="m-auto w-fit">
        <FontAwesomeIcon
          icon={faStar}
          style={{
            margin: "auto",
            fontSize: "40px",
            marginTop: "80px",
            color: "#ffff00",
          }}
        />
      </div>

      <p className="w-fit m-auto mb-6">New Task</p>

      <div className="w-fit m-auto">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            paddingTop: "-100px",
            paddingRight: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            borderRadius: "10px",
            boxShadow: 3,
            backgroundColor: isClicked ? color : "white",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Task name"
            sx={{ width: "100%" }}
            value={note}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setNote(e.target.value)}
            variant="standard"
            required
          />
        </Box>

        {/* here come list of colors */}
        <InputLabel
          htmlFor="label-card-color-picker"
          sx={{
            color: "black",
            fontWeight: "bold",
            width: "fit-content",
            marginLeft: "9px",
            marginTop: "17px",
          }}
        >
          Card color
        </InputLabel>

        <div className="flex w-fit transform translate-x-[12%] space-x-[10px] mt-[20px]">
          {Object.keys(Colors).map((color) => (
            <Box
              key={color}
              sx={{
                width: "30px",
                height: "30px",
                backgroundColor: color,
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() =>
                handleColorChange(Colors[color as keyof typeof Colors])
              }
            ></Box>
          ))}
        </div>

        <div className="mt-[29px] m-auto w-fit">
          <StyledButton onClick={addMemo}>Add memo</StyledButton>
        </div>
      </div>

      <div className="fixed bg-white rounded-t-md bottom-0 w-[430px]">
        <Menu />
      </div>
    </div>
  );
};

export default NewMemo;
