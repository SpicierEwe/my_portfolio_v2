"use client";

import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const query = router.query;

  return <p>Post: {query}</p>;
}
