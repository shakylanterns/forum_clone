import React from "react";
import Explore from "./Explore";
import SidebarUser from "./SidebarUser";
import TopicControls from "./TopicControls";
import TopicDescription from "./TopicDescription";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="space-y-8">
      <SidebarUser />
      {/* It will be real data later */}
      <TopicControls isAdmin={true} subscribers={100} topic={"test"} />
      <TopicDescription topic="test" description="test" />
      <Explore />
    </div>
  );
};

export default Sidebar;
