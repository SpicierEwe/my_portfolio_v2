"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project() {
  const router = useRouter();
  const query = router;

  return <p>Post: {query.toString()}</p>;
}
