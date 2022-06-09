import React, { Fragment } from "react";
import { Post } from "../../helpers/types";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <Fragment>
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </Fragment>
  );
};

export default PostList;
