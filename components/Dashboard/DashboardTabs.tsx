import React from "react";
import { ItemTypes } from "../../helpers/types";
import GreyBox from "../Base/GreyBox";

const tabs = ["posts", "comments", "list"] as ItemTypes[];

type Props = {
  selected: ItemTypes;
  setSelected: React.Dispatch<React.SetStateAction<ItemTypes>>;
};

const DashboardTabs = ({ selected, setSelected }: Props) => {
  return (
    <GreyBox needPadding={false}>
      <div>
        {tabs.map((tab, index) => {
          return (
            <button
              className={`inline-block py-2 px-4 ${
                tab === selected
                  ? "text-brand"
                  : "hover:underline hover:text-brand"
              }`}
              key={index}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </GreyBox>
  );
};

export default DashboardTabs;
