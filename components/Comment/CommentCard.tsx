import React, { useMemo } from "react";
import { niceDuration } from "../../helpers/niceDuration";
import { Comment } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import GreyBox from "../Base/GreyBox";
import CopyLinkButton from "./CopyLinkButton";
import ReplyLinkButton from "./ReplyLinkButton";
import SavePostLinkButton from "./SavePostLinkButton";

type Props = {
  comment: Comment;
};

const CommentCard = ({ comment }: Props) => {
  const niceDurationString = useMemo(() => {
    return niceDuration(comment.publishedAt);
  }, [comment.publishedAt]);

  const savePost = () => {};

  return (
    <GreyBox>
      <div className="space-y-6" id={`comment-${comment.id}`}>
        <p>
          posted by {/* the link will be changed to topic id later */}
          <span className="font-semibold">
            <Anchor href={`/account/${comment.user.id}`}>
              {comment.user.name}
            </Anchor>
          </span>{" "}
          at {niceDurationString}
        </p>
        <p>{comment.content}</p>
        <div className="flex flex-col items-start md:flex-row md:space-x-4">
          <CopyLinkButton commentId={comment.id} />
          <SavePostLinkButton />
          <ReplyLinkButton />
        </div>
      </div>
    </GreyBox>
  );
};

export default CommentCard;
