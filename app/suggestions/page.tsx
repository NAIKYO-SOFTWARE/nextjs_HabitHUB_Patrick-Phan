"use client";

import Link from "next/link";
import MemoInSuggestions from "../../components/sub-components/MemoInSuggest";
import UnstyledButtonsIntroduction from "@/components/sub-components/Button/Button";
import StyledButton from "@/components/sub-components/Button/Button";
import Menu from "@/components/Menu";
import { Button } from "@mui/base";

const Suggestions = () => {
  const green = "#86EFAC";
  const yellow = "#fefcbf";
  const blue = "#90cdf4";
  const orange = "#FBD38D";
  const purpil = "#a5b4fc";
  const eggshell = "#F0EAD6";

  // đây là số lượng memo trưng dụng để cho có
  const memos = [
    { id: 1, color: green, note: "📖 Reading" },
    { id: 2, color: yellow, note: "✏️ Study" },
    { id: 3, color: blue, note: "🏃 Running" },
    { id: 4, color: orange, note: "🚴 Cycling" },
    { id: 5, color: purpil, note: "🧹 Mop the house" },
    { id: 6, color: eggshell, note: "🚽 Clean the bathroom" },
  ];

  return (
    <div className="flex justify-center w-[430px] h-[930px] m-auto">
      <div className="flex m-auto justify-center flex-col">
        <p className="mt-[-100px] mb-2 text-[17px] text-center text-black">
          Suggestions
        </p>

        <div className="mb-[10px]">
          {memos.map((memo) => (
            <MemoInSuggestions
              key={memo.id}
              id={memo.id}
              color={memo.color}
              note={memo.note}
            />
          ))}
        </div>

        <div className="mt-[29px] left-[420px] rounded-lg fixed bottom-[90px] bg-white">
          <Link href="/newMemo">
            <Button className="shadow-lg py-[10px] px-[23px] rounded-lg">
              Add more
            </Button>
          </Link>
        </div>

        {/* <button className="mt-12 cursor-pointer mb-[40px] text-gray-600 text-[13px]">
          <Link href="/memos">&gt;&gt; See all your memos</Link>
        </button> */}

        <div className="fixed bottom-0 w-[430px] translate-x-[-25px] rounded-t-lg bg-white">
          <Menu />
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
