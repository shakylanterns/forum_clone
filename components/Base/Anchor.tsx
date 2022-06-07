import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: string;
};

const Anchor = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a className="hover:text-brand hover:underline hover:underline-offset-1">
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
