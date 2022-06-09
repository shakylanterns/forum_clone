import React from "react";
import LinkButton from "../Base/LinkButton";

type Props = {
  commentId: number;
};

const CopyLinkButton = ({ commentId }: Props) => {
  const copyLink = () => {
    navigator.clipboard.writeText(`${location.href}#comment-${commentId}`);
  };
  return <LinkButton action={copyLink}>Copy Direct Link</LinkButton>;
};

export default CopyLinkButton;
