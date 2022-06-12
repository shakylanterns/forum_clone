import React, { Fragment, useReducer } from "react";
import { toast } from "react-toastify";
import { Topic } from "../../helpers/types";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";
import TopicListing from "../Topic/TopicListing";

type Props = {
  topics: Topic[];
};

type Action =
  | { type: "subscribe"; payload: number }
  | { type: "unsubscribe"; payload: number };

const TopicsManager = ({ topics }: Props) => {
  const [state, dispatch] = useReducer(
    (state: Record<number, boolean>, action: Action) => {
      switch (action.type) {
        case "subscribe":
          return {
            ...state,
            [action.payload]: true,
          };
        case "unsubscribe":
          return {
            ...state,
            [action.payload]: false,
          };
      }
    },
    {},
    () => {
      const allSubscribed: Record<number, boolean> = {};
      topics.forEach((topic) => {
        allSubscribed[topic.id] = true;
      });
      return allSubscribed;
    }
  );
  if (topics.length === 0) {
    return <p>This user has not subscribed to any topics</p>;
  }
  return (
    <GreyBox>
      <Fragment>
        {topics.map((topic) => {
          return (
            <div
              className="flex justify-around space-y-4 items-center"
              key={topic.id}
            >
              <TopicListing topic={topic} />
              {state[topic.id] ? (
                <Button
                  onClick={() => {
                    toast(`Unsubscribed from ${topic.name}`, { type: "info" });
                    dispatch({
                      payload: topic.id,
                      type: "unsubscribe",
                    });
                  }}
                >
                  Unsubscribe
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    toast(`Subscribed to ${topic.name}`, { type: "success" });
                    dispatch({
                      payload: topic.id,
                      type: "subscribe",
                    });
                  }}
                >
                  Subscribe
                </Button>
              )}
            </div>
          );
        })}
      </Fragment>
    </GreyBox>
  );
};

export default TopicsManager;
