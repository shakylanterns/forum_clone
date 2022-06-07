import React from "react";
import Anchor from "../Base/Anchor";

type Props = {
  topics: string[];
};

const TopicsDropdown = ({ topics }: Props) => {
  return (
    <div className="block md:absolute left-0 top-8 md:p-2 md:bg-white md:border-2 md:border-gray-300 min-w-full">
      {topics.length === 0 && (
        <p className="my-4">
          You currently do not have any subscriptions. Subscribe to topics so
          that they will show up in this list.
        </p>
      )}
      <ul className="space-y-4">
        {/* The index as key is temporary and will be changed in the future */}
        {topics.length !== 0 &&
          topics.map((topic, index) => {
            return (
              <li key={index}>
                <Anchor href={`/topic/${topic}`}>{topic}</Anchor>
              </li>
            );
          })}
        <li className="my-6">
          <Anchor href="/account">Edit list...</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default TopicsDropdown;
