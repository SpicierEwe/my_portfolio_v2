"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project({ params }) {
  const { projectName } = params;
  return <p>Post: {params}</p>;
}
