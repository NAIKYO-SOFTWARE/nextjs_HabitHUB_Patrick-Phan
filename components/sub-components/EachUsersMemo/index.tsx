// we have color, note's content to be saved to redux global
"use client";

import { useDispatch } from "react-redux";
import {
  dispatchDeleteMemo,
  dispatchToggleComplete,
} from "@/redux/store/store";

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
    if (window.confirm("Are you sure?")) {
      dispatchDeleteMemo(id, dispatch);
    }
  };

  return (
    <div key={id} className="flex w-[520px] mt-[13px]">
      <div
        onClick={toggleComplete}
        style={{ backgroundColor: color }}
        className={`w-[320px] h-[70px] flex space-x-[155px] rounded-lg vertical-alignment`}
      >
        <span
          className={`ml-[13px] text-[23px] ${complete ? "line-through" : ""}`}
        >
          {note}
        </span>

        <div
          className={`h-[18px] w-[18px] ${
            complete ? "bg-gray-300" : "bg-white"
          } rounded-full border border-solid`}
        ></div>
      </div>
      <div
        onClick={deleteThisNote}
        className="text-white bg-red-500 w-[50px] h-[20px]"
      >
        Delete
      </div>
    </div>
  );
};
