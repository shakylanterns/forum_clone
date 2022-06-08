import Link from "next/link";
import React from "react";
import { User } from "../../helpers/types";
import Button from "../Base/Button";

type Props = {
  user?: User;
};

const NavUser = ({ user }: Props) => {
  if (user) {
    return (
      <div className="flex items-center">
        <p>Logged in as {user.name}</p>
        <Button>Logout</Button>
      </div>
    );
  } else {
    return (
      <div className="space-y-4 flex flex-col sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
        <Button>
          <Link href="/register">Register an Account</Link>
        </Button>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }
};

export default NavUser;
