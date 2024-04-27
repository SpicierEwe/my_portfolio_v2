"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project({ params }) {
  const { id } = params;
  return <p>Post: {projectName}</p>;
}
