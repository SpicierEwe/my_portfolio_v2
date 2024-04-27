import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  return <p>Post: {router.query.projectName}</p>;
}
