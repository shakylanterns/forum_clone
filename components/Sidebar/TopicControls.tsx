import Link from "next/link";
import React from "react";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";

// now it is just an isAdmin state, later there will be fancy logic
type Props = {
  isAdmin: boolean;
  topic: string;
  subscribers: number;
};

const TopicControls = ({ isAdmin, topic, subscribers }: Props) => {
  return (
    <GreyBox>
      <div className="space-y-4">
        <span className="font-semibold text-lg">{topic}</span>
        <div>
          <span className="text-4xl">{subscribers}</span>
          <p className="">subscribers</p>
        </div>
        {isAdmin && (
          <Button>
            <Link href={`/manage/${topic}`}>Manage Topic</Link>
          </Button>
        )}
      </div>
    </GreyBox>
  );
};

export default TopicControls;
