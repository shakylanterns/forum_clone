import React from "react";
import { SortingCriterion } from "../../helpers/types";
import GreyBox from "../Base/GreyBox";

type Props = {
  selected: SortingCriterion;
  setSelected: React.Dispatch<React.SetStateAction<SortingCriterion>>;
};

const criteria = [
  "none",
  "top",
  "popular",
  "controversial",
] as SortingCriterion[];

const SortingControls = ({ selected, setSelected }: Props) => {
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

export default SortingControls;
