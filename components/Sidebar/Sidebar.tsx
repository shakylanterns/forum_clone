import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Explore from "./Explore";
import SidebarUser from "./SidebarUser";
import TopicControls from "./TopicControls";
import TopicDescription from "./TopicDescription";

type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();
  const { query, pathname } = router;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }
  const id = query.topicId as string;

  return (
    <div className="space-y-8">
      <SidebarUser />
      {/* It will be real data later */}
      {/* If the user is not on a topic page (e.g. main page), do not render the topic controls */}
      {pathname.startsWith("/topic") && id !== undefined ? (
        <Fragment>
          <TopicControls
            isAdmin={true}
            subscribers={100}
            topic={"test"}
            subscribed={true}
            id={1}
          />
          <TopicDescription topic="test" description="test" />
        </Fragment>
      ) : null}
      <Explore />
    </div>
  );
};

export default Sidebar;
