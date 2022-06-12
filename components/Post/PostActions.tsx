import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Post } from "../../helpers/types";
import LinkButton from "../Base/LinkButton";

type Props = {
  post: Post;
  hideReadComments?: boolean;
};

const PostActions = ({ post, hideReadComments }: Props) => {
  const [saved, setSaved] = useState(false);

  const router = useRouter();
  const readComments = () => {
    router.push(`/topic/${post.topic}/${post.id}`);
  };
  const copyLink = () => {
    toast("Link copied", { type: "success" });
    navigator.clipboard.writeText(`${location.href}topic/${post.id}`);
  };

  const savePost = () => {
    if (saved) {
      toast("Post removed from save", { type: "info" });
      setSaved(false);
      return;
    }
    toast("Post Saved", { type: "success" });
    setSaved(true);
  };

  return (
    <div className="space-x-4">
      {!hideReadComments && (
        <LinkButton action={readComments}>Read Comments</LinkButton>
      )}
      <LinkButton action={savePost}>
        {saved ? "Unsave Post" : "Save Post"}
      </LinkButton>
      <LinkButton action={copyLink}>Copy Link</LinkButton>
    </div>
  );
};

export default PostActions;
