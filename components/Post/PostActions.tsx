import { useRouter } from "next/router";
import React from "react";
import { Post } from "../../helpers/types";
import LinkButton from "../Base/LinkButton";

type Props = {
  post: Post;
  hideReadComments?: boolean;
};

const PostActions = ({ post, hideReadComments }: Props) => {
  const router = useRouter();
  const readComments = () => {
    router.push(`/topic/${post.topic}/${post.id}`);
  };
  const copyLink = () => {
    navigator.clipboard.writeText(`${location.href}topic/${post.id}`);
  };

  const savePost = () => {
    return undefined;
  };

  return (
    <div className="space-x-4">
      {!hideReadComments && (
        <LinkButton action={readComments}>Read Comments</LinkButton>
      )}
      <LinkButton action={savePost}>Save Post</LinkButton>
      <LinkButton action={copyLink}>Copy Link</LinkButton>
    </div>
  );
};

export default PostActions;
