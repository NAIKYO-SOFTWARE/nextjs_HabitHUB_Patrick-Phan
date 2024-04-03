"use client";

// ở đây sẽ hồi tất cả mọi redux state về những memo đã thêm
import { EachUsersMemo } from "../../components/sub-components/EachUsersMemo";
import { useEffect, useMemo } from "react";
import { getAllMemosFromLocal } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import { Box, Modal, Typography } from "@mui/material";

const Memos = () => {
  // đầu tiên, mới vào thì tất nhiên chưa mở vì user có yêu cầu gì
  const [open, setOpen] = useState(false);

  // vì là handle close nên set open không false mới lạ
  const handleClose = () => {
    setOpen(false);

    setShowUpIncomplete(false);
  };

  // get all from ls, and then copy back to redux
  const allUsersMemos = useMemo(getAllMemosFromLocal, []);

  const [showUpIncomplete, setShowUpIncomplete] = useState(false);

  const allMemos = useSelector((state: any) => state.memos);

  const showIncompletedMemos = () => {
    setShowUpIncomplete(!showUpIncomplete);

    setOpen(true);
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

  useEffect(() => {
    console.log("Số memos chưa gạch ngang: ", incompletedMemos);
  }, [showUpIncomplete]);

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
    <div className="flex justify-center transform translate-x-[85px]">
      <div className="flex flex-col">
        <p className="italic w-[380px] transform translate-x-[-36px] mt-10 mb-2 text-[28px] text-center text-gray-600">
          {`Here displays all the user's personal memos`}
        </p>

        <button
          className="h-[30px] w-[200px] rounded-lg bg-violet-400 "
          onClick={showIncompletedMemos}
        >
          {`see ${showUpIncomplete === true ? "all" : "incompleted"} memos`}
        </button>

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
        {allUsersMemos.length === 0 && (
          <p className="mt-12 cursor-pointer text-gray-600 text-[26px]">
            No memos have made.
          </p>
        )}

        <button className="mt-12 cursor-pointer text-gray-600 text-[26px] transform translate-x-[-80px]">
          <Link href="/suggestions">&lt;&lt; Return back to add memos.</Link>
        </button>
      </div>
    </div>
  );
};

export default Memos;
