import React from "react";
import LinkButton from "../Base/LinkButton";

type Props = {};

const ReplyLinkButton = (props: Props) => {
  const replyComment = () => {};
  return <LinkButton action={replyComment}>Reply</LinkButton>;
};

export default ReplyLinkButton;
