"use client";

// ở đây sẽ hồi tất cả mọi redux state về những memo đã thêm
import { EachUsersMemo } from "../../components/sub-components/EachUsersMemo";
import { useEffect, useMemo } from "react";
import {
  dispatchDeleteEverything,
  getAllMemosFromLocal,
} from "../../redux/store/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const Memos = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);

    setShowUpIncomplete(false);
  };

  const dispatch = useDispatch();

  // get all from ls, and then copy back to redux
  const allUsersMemos = useMemo(getAllMemosFromLocal, []);

  const [showUpIncomplete, setShowUpIncomplete] = useState(false);

  const allMemos = useSelector((state: any) => state.memos);

  const showIncompletedMemos = () => {
    setShowUpIncomplete(!showUpIncomplete);

    setOpen(true);
  };

  const deleteAllMemos = () => {
    if (window.confirm("Are you sure to delete them all?")) {
      dispatchDeleteEverything(dispatch);
    }
  };

  const incompletedMemos = allMemos
    .filter((eachMemo: any) => eachMemo.complete === false)
    .map((eachMemo: any) => (
      <EachUsersMemo
        key={eachMemo.id}
        id={eachMemo.id}
        note={eachMemo.content}
        color={eachMemo.color}
        complete={eachMemo.complete}
      />
    ));

  const thongBaoBanDaHoanThanhTatCaMoiThu = (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          You have no incompleted task left.
        </Typography>
      </Box>
    </Modal>
  );

  return (
    <div className="flex justify-center">
      <div className="flex justify-center m-auto flex-col">
        <p className="w-fit m-auto mt-10 mb-2 text-[20px] text-center text-gray-600">
          {`All user's memos`}
        </p>

        <div className="flex space-x-[10px]">
          <button
            className={`h-[30px] mt-[10px] m-auto px-[5px] w-fit rounded-lg ${
              showUpIncomplete === true ? "bg-violet-400" : "bg-cyan-500"
            } `}
            onClick={showIncompletedMemos}
          >
            {`see ${showUpIncomplete === true ? "all" : "incompleted"} memos`}
          </button>

          <Button
            variant="outlined"
            sx={{
              width: "fit-content",
              border: "2px solid",
              fontWeight: "bold",
              fontSize: "13px",
              textTransform: "none",
            }}
            onClick={deleteAllMemos}
          >
            Delete all
          </Button>
        </div>

        {/* see all memos user have made include completed and incompleted ones */}
        {allUsersMemos.length > 0 &&
          showUpIncomplete === false &&
          allMemos.map((eachMemo: any) => (
            <EachUsersMemo
              key={eachMemo.id}
              id={eachMemo.id}
              note={eachMemo.content}
              color={eachMemo.color}
              complete={eachMemo.complete}
            />
          ))}

        {/* show notifi that we have no incompleted tasks left */}
        {showUpIncomplete === true &&
          incompletedMemos.length === 0 &&
          thongBaoBanDaHoanThanhTatCaMoiThu}

        {/* shows no memos have made */}
        {allMemos.length === 0 && (
          <p className="mt-12 m-auto text-gray-600 text-[17px]">
            No memos have made.
          </p>
        )}

        {/* see incompleted task(s) */}
        {showUpIncomplete === true && incompletedMemos}

        <button className="mt-12 cursor-pointer text-gray-600 text-[13px]">
          <Link href="/suggestions">&lt;&lt; Return back to add memos.</Link>
        </button>
      </div>
    </div>
  );
};

export default Memos;
