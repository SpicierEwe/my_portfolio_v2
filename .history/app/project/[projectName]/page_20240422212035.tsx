"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Project({ params }) {
  return <p>Post: {params}</p>;
}
