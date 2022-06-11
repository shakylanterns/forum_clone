import React, { Fragment } from "react";
import GreyBox from "../Base/GreyBox";
import TopicListing from "../Topic/TopicListing";

type Props = {};

const Explore = (props: Props) => {
  return (
    <GreyBox>
      <Fragment>
        <h1 className="mb-4 font-bold">Explore</h1>
        <div className="flex flex-col space-y-2">
          {/* This is just temporary */}
          {[{ name: "test", subscribers: 100, id: 1 }].map((topic) => {
            return <TopicListing topic={topic} key={topic.id} />;
          })}
        </div>
      </Fragment>
    </GreyBox>
  );
};

export default Explore;
