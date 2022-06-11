import React, { useMemo, useState } from "react";
import { niceDuration } from "../../helpers/niceDuration";
import { Post } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import GreyBox from "../Base/GreyBox";
import PostActions from "./PostActions";

type Props = {
  post: Post;
  hideReadComments?: boolean;
};

const PostCard = ({ post, hideReadComments }: Props) => {
  const [reveal, setReveal] = useState(false);
  const needExcerpt = post.content.length > 150;
  const excerpt = needExcerpt
    ? post.content.slice(0, 150) + "..."
    : post.content;

  const niceDurationString = useMemo(() => {
    return niceDuration(post.publishedAt);
  }, [post.publishedAt]);

  return (
    <GreyBox>
      <div className="space-y-6">
        <p>
          {/* the link will be changed to topic id later */}
          on{" "}
          <span className="font-semibold">
            <Anchor href={`/topic/${post.topic}`}>{post.topic}</Anchor>
          </span>{" "}
          by{" "}
          <span className="font-semibold">
            <Anchor href={`/account/${post.user.id}`}>{post.user.name}</Anchor>
          </span>{" "}
          at {niceDurationString}
        </p>
        <h2 className="font-bold text-xl md:text-2xl">{post.title}</h2>
        <p className="" style={{ maxWidth: "75ch" }}>
          {reveal ? post.content : excerpt}
        </p>
        {needExcerpt && !reveal ? (
          <div className="flex justify-center text-brand underline cursor-pointer">
            <button onClick={() => setReveal(true)}>Read Full...</button>
          </div>
        ) : null}
        <PostActions post={post} hideReadComments={hideReadComments} />
      </div>
    </GreyBox>
  );
};

export default PostCard;
