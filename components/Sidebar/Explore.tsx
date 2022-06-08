import React, { Fragment } from "react";
import Anchor from "../Base/Anchor";
import GreyBox from "../Base/GreyBox";

type Props = {};

const Explore = (props: Props) => {
  return (
    <GreyBox>
      <Fragment>
        <h1 className="mb-4 font-bold">Explore</h1>
        <div className="flex flex-col space-y-2">
          {/* This is just temporary */}
          {[{ topic: "test", subscribers: 100 }].map(
            ({ subscribers, topic }, index) => {
              return (
                <div key={index}>
                  <Anchor href={`/topic/${topic}`}>{topic}</Anchor>
                  <p>{subscribers} subscribers</p>
                </div>
              );
            }
          )}
        </div>
      </Fragment>
    </GreyBox>
  );
};

export default Explore;
