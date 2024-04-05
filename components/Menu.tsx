"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faListCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="flex space-x-[90px] justify-center rounded-t-xl shadow-3xl w-full">
      <Link href="/suggestions">
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ padding: "19px 17px", fontSize: "30px" }}
        />
      </Link>

      <Link href="/memos">
        <FontAwesomeIcon
          icon={faListCheck}
          style={{ padding: "19px 17px", fontSize: "30px" }}
        />
      </Link>

      <FontAwesomeIcon
        icon={faUser}
        style={{ padding: "19px 17px", fontSize: "30px" }}
      />
    </div>
  );
};

export default Menu;
