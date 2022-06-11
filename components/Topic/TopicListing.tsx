import React from "react";
import { Topic } from "../../helpers/types";
import Anchor from "../Base/Anchor";

type Props = {
  topic: Topic;
};

const TopicListing = ({ topic }: Props) => {
  return (
    <div>
      <Anchor href={`/topic/${topic.id}`}>{topic.name}</Anchor>
      <p>{topic.subscribers} subscribers</p>
    </div>
  );
};

export default TopicListing;
