"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project() {
  // New (usePathname, useSearchParams)
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams);

  return (
    <p>
      Post: {pathname} === {query["projectName"]}
    </p>
  );
}
