import React, { useState } from "react";
import CommentCard from "../../components/Comment/CommentCard";
import DashboardTabs from "../../components/Dashboard/DashboardTabs";
import Layout from "../../components/Layout";
import PostCard from "../../components/Post/PostCard";
import { Comment, ItemTypes, Post } from "../../helpers/types";

type Props = {};

const Dashboard = (props: Props) => {
  const [selected, setSelected] = useState<ItemTypes>("posts");

  // temporary
  const comments: Comment[] = [];
  const posts: Post[] = [];

  const renderContent = () => {
    switch (selected) {
      case "comments":
        if (comments.length === 0) {
          return <p>This user has written no comments</p>;
        }
        return comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.id} />;
        });
      case "posts":
        if (posts.length === 0) {
          return <p>This user has written no posts</p>;
        }
        return posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        });
    }
  };

  return (
    <Layout>
      <div className="space-y-4">
        <DashboardTabs selected={selected} setSelected={setSelected} />
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Dashboard;
