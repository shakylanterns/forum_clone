import React from "react";
import { toast } from "react-toastify";
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
  const handleSubscribe = () => {
    if (subscribed) {
      toast(`Unsubscribed from ${topic}`, { type: "info" });
    } else {
      toast(`Subscribed to ${topic}`, { type: "success" });
    }
  };

  return (
    <GreyBox>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">{topic}</span>
          <span className="">{subscribers} subscribers</span>
        </div>
        <div>
          {subscribed ? (
            <Button onClick={handleSubscribe}>Unsubscribe</Button>
          ) : (
            <Button onClick={handleSubscribe}>Subscribe</Button>
          )}
        </div>
        <div>
          {isAdmin && (
            <Button href={`/topic/${id}/manage`}>Manage Topic</Button>
          )}
        </div>
      </div>
    </GreyBox>
  );
};

export default TopicControls;
