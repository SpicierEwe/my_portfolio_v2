"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project() {
  const pathname = usePathname();
  const query = useSearchParams();

  return (
    <p>
      Post: {pathname} === {query.get("projectName")}
    </p>
  );
}
