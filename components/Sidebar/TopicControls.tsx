import Link from "next/link";
import React from "react";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";

// now it is just an isAdmin state, later there will be fancy logic
type Props = {
  isAdmin: boolean;
  topic: string;
  id: number;
  subscribers: number;
  subscribed: boolean;
};

const TopicControls = ({
  isAdmin,
  topic,
  subscribers,
  subscribed,
  id,
}: Props) => {
  return (
    <GreyBox>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">{topic}</span>
          <span className="">{subscribers} subscribers</span>
        </div>
        <div>
          {subscribed ? (
            <Button>Unsubscribe</Button>
          ) : (
            <Button>Subscribe</Button>
          )}
        </div>
        <div>
          {isAdmin && (
            <Button>
              <Link href={`/topic/${id}/manage`}>Manage Topic</Link>
            </Button>
          )}
        </div>
      </div>
    </GreyBox>
  );
};

export default TopicControls;
