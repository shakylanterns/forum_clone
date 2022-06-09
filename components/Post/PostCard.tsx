import { formatDuration, intervalToDuration } from "date-fns";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Post } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import GreyBox from "../Base/GreyBox";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const [reveal, setReveal] = useState(false);
  const needExcerpt = post.content.length > 150;
  const excerpt = needExcerpt
    ? post.content.slice(0, 150) + "..."
    : post.content;

  const niceDurationString = useMemo(() => {
    const duration = intervalToDuration({
      start: post.publishedAt,
      end: new Date(),
    });
    const formatString = formatDuration(duration, {
      format: ["years", "months", "days", "hours", "minutes"],
    });
    // if it is under a minute
    if (formatString === "") {
      return "less than a minute ago";
    }
    return formatString + " ago";
  }, [post]);

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
          {niceDurationString}
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
        {reveal ? (
          <div className="flex flex-col justify-center text-brand underline cursor-pointer">
            <button onClick={() => setReveal(false)}>Close...</button>
            <button>
              <Link href={`/topic/${post.topic}/${post.id}`}>
                Read Comments...
              </Link>
            </button>
          </div>
        ) : null}
      </div>
    </GreyBox>
  );
};

export default PostCard;
