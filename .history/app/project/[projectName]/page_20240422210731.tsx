"use client";

import { useRouter } from "next/navigation";

export default function Project() {
  const router = useRouter();
  const query = router.query;

  return <p>Post: {query}</p>;
}
