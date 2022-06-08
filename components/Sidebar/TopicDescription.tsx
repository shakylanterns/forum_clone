import React, { Fragment } from "react";
import GreyBox from "../Base/GreyBox";

type Props = {
  description: string;
  topic: string;
};

const TopicDescription = ({ description, topic }: Props) => {
  return (
    <GreyBox>
      <Fragment>
        <h1 className="mb-4 font-bold">About {topic}</h1>
        {description}
      </Fragment>
    </GreyBox>
  );
};

export default TopicDescription;
