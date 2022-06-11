import Link from "next/link";
import React from "react";
import { User } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";

type Props = {
  user?: User;
};

const SidebarUser = ({ user }: Props) => {
  return (
    <GreyBox>
      {user ? (
        <div>
          <p>
            Logged in as{" "}
            <Anchor href={`/account/${user.id}`}>{user.name}</Anchor>
          </p>
          <Button>Logout</Button>
          <Link href={`/account/manage`}>
            <Button>Change User Info</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          <p>You are currently not logged in.</p>
          <Link href="/register">
            <Button>Register an Account</Button>
          </Link>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
    </GreyBox>
  );
};

export default SidebarUser;
