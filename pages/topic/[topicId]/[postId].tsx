import React from "react";
import CommentCard from "../../../components/Comment/CommentCard";
import Layout from "../../../components/Layout";
import PostCard from "../../../components/Post/PostCard";
import { Comment, Post } from "../../../helpers/types";

type Props = {};

// will be populated by real data later
const post: Post = {
  content: "",
  id: 1,
  publishedAt: new Date(),
  title: "",
  topic: "",
  user: { name: "", id: 2 },
};

const comments: Comment[] = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta incidunt, amet dignissimos numquam ab, illum natus quos totam, officia culpa! Explicabo neque vero eius aliquid qui atque odit doloribus!",
    postId: 1,
    id: 1,
    publishedAt: new Date(),
    user: { name: "hi", id: 3 },
  },
];

const TopicPost = (props: Props) => {
  return (
    <Layout>
      <div className="space-y-4">
        <PostCard post={post} />
        {comments.map((comment, index) => {
          return <CommentCard comment={comment} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default TopicPost;
