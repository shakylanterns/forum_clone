import { useRouter } from "next/router";

export const useRedirect = (fallback: string = "/") => {
  const router = useRouter();
  const { query, push } = router;

  const redirect = () => {
    setTimeout(() => {
      if (query.redirect instanceof Array) {
        push(fallback);
      } else {
        push(query.redirect || fallback);
      }
    }, 200);
  };

  return { router, redirect };
};
