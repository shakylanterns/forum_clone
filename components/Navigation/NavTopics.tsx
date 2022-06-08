import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import TopicsDropdown from "./TopicsDropdown";

type Props = {};

const NavTopics = (props: Props) => {
  const [openTopics, setOpenTopics] = useState(false);
  return (
    <div className="relative">
      <li
        className="flex items-center cursor-pointer"
        onClick={() => setOpenTopics((topics) => !topics)}
      >
        <span className="mr-2">Subscribed Topics</span>
        <button>
          {openTopics ? (
            <FaCaretUp
              className="inline-block w-4 h-4"
              data-testid="fa-caret-up"
            />
          ) : (
            <FaCaretDown
              className="inline-block w-4 h-4"
              data-testid="fa-caret-down"
            />
          )}
        </button>
      </li>
      {openTopics ? <TopicsDropdown topics={[]} /> : null}
    </div>
  );
};

export default NavTopics;
