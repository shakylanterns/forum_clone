import React from "react";
import { ItemTypes } from "../../helpers/types";
import GreyBox from "../Base/GreyBox";

const criteria = ["posts", "comments"] as ItemTypes[];

type Props = {
  selected: ItemTypes;
  setSelected: React.Dispatch<React.SetStateAction<ItemTypes>>;
};

const DashboardTabs = ({ selected, setSelected }: Props) => {
  return (
    <GreyBox needPadding={false}>
      <div>
        {criteria.map((criterion, index) => {
          return (
            <button
              className={`inline-block py-2 px-4 ${
                criterion === selected
                  ? "text-brand"
                  : "hover:underline hover:text-brand"
              }`}
              key={index}
              onClick={() => setSelected(criterion)}
            >
              {criterion}
            </button>
          );
        })}
      </div>
    </GreyBox>
  );
};

export default DashboardTabs;
