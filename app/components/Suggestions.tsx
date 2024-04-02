"use client";
import MemoSug from "./subcomps/MemoSug";

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
    { id: 6, color: eggshell, note: "🚽 Clean the beathroom" },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="italic w-[380px] mt-10 mb-2 text-[28px] text-center text-gray-600">
          {`These memos are used for examples only, hit the '+' button to simulate
          user is adding memos for real`}
        </p>

        {memos.map((memo) => (
          <MemoSug
            key={memo.id}
            id={memo.id}
            color={memo.color}
            note={memo.note}
          />
        ))}

        <button
          onClick={() => (window.location.href = "/allMemos")}
          className="mt-12 cursor-pointer text-gray-600 text-[26px]"
        >
          &gt;&gt; See all your memos
        </button>
      </div>
    </div>
  );
}
export default Suggestions;