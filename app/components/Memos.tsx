"use client";

// ở đây sẽ hồi tất cả mọi redux state về những memo đã thêm
import { EachUsersMemo } from "./subcomps/EachUsersMemo";
import { useMemo } from "react";
import { getAllMemosFromLocal } from "../redux/store/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const Memos = () => {
  // get all from ls, and then copy back to redux
  const allUsersMemos = useMemo(getAllMemosFromLocal, []);

  const [showUpIncomplete, setShowUpIncomplete] = useState(false);

  const allMemos = useSelector((state: any) => state.memos);

  const showIncompletedMemos = () => {
    setShowUpIncomplete(!showUpIncomplete);
  };

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

        {allUsersMemos.length > 0 ? (
          showUpIncomplete === true ? (
            allMemos
              .filter((eachMemo: any) => eachMemo.complete === false)
              .map((eachMemo: any) => (
                <EachUsersMemo
                  key={eachMemo.id}
                  id={eachMemo.id}
                  note={eachMemo.content}
                  color={eachMemo.color}
                  complete={eachMemo.complete}
                />
              ))
          ) : (
            allMemos.map((eachMemo: any) => (
              <EachUsersMemo
                key={eachMemo.id}
                id={eachMemo.id}
                note={eachMemo.content}
                color={eachMemo.color}
                complete={eachMemo.complete}
              />
            ))
          )
        ) : (
          <p className="mt-12 cursor-pointer text-gray-600 text-[26px]">
            No memos have made.
          </p>
        )}

        <button
          onClick={() => (window.location.href = "/suggestions")}
          className="mt-12 cursor-pointer text-gray-600 text-[26px] transform translate-x-[-80px]"
        >
          &lt;&lt; Return back to add memos.
        </button>
      </div>
    </div>
  );
};

export default Memos;
