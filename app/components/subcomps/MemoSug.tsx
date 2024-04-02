"use client";

import React from "react";
import { useDispatch } from "react-redux";
import {
  dispatchAddMemo,
  dispatchToggleComplete,
} from "@/app/redux/store/store";

// interface đóng vai trò như blueprint của props truyền vào
interface IMemoSugProps {
  id: number;
  color: string;
  note: string;
}

const MemoSug: React.FC<IMemoSugProps> = ({ id, color, note }) => {
  // Dòng: ({ id, color, note }) này là followed theo rules của interface trên kia, có props thì chắc chắn có interface

  const dispatch = useDispatch();

  const addMemo = () => {
    dispatchAddMemo(color, note, dispatch);
  };

  const toggleComplete = () => {
    dispatchToggleComplete(id, dispatch);
  };

  return (
    <div key={id} className="flex w-[380px] justify-between mt-[13px]">
      <div
        onClick={toggleComplete}
        style={{ backgroundColor: color }}
        className="w-[320px] h-[70px] rounded-lg vertical-alignment"
      >
        <span className="ml-[13px] text-[23px]">{note}</span>
      </div>

      <button
        onClick={addMemo}
        className="button-container transform translate-y-[11px] text-black text-[37px] h-[47px] w-[47px] bg-gray-300 rounded-full"
      >
        +
      </button>
    </div>
  );
};

export default MemoSug;
